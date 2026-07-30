const { chromium } = require("playwright");
const mysql = require("mysql2/promise");

const BOOKING_URL =
  "https://www.booking.com/hotel/ro/shakespeare-central-apartment.html";

// -------------------- DB CONNECTION --------------------
async function getDb() {
  return await mysql.createConnection({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "userpass",
    database: process.env.DB_NAME || "craiova",
  });
}

// -------------------- BROWSER --------------------
async function launchBrowser() {
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
  });

  return { browser, context };
}

async function createPage(context) {
  return context.newPage();
}

async function navigateToPage(page, url) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
}

async function acceptCookies(page) {
  const btn = page.locator("#onetrust-accept-btn-handler");

  try {
    await btn.click({ timeout: 3000 });
  } catch {
    try {
      await page.evaluate(() => {
        document.querySelector("#onetrust-accept-btn-handler")?.click();
      });
    } catch {}
  }
}

// -------------------- SCRAPE UI --------------------
async function openReviews(page) {
  const btn = page.locator("#reviews-tab-trigger");

  await btn.waitFor({ state: "visible", timeout: 10000 });
  await btn.scrollIntoViewIfNeeded();

  try {
    await Promise.all([
      page.waitForSelector('[data-testid="review-card"]', { timeout: 20000 }),
      btn.click(),
    ]);
  } catch {
    await btn.click({ force: true });
    await page.waitForSelector('[data-testid="review-card"]', {
      timeout: 20000,
    });
  }

  await page.waitForTimeout(2000);
}

async function extractReviews(page) {
  return page.$$eval('[data-testid="review-card"]', (cards) =>
    cards.map((card) => ({
      name:
        card
          .querySelector(
            '[data-testid="review-avatarr"] > div > div:nth-of-type(2) > div'
          )
          ?.textContent?.trim() || "",
      country:
        card
          .querySelector(
            '[data-testid="review-avatar"] > div > div:nth-of-type(2) > div:nth-of-type(2) span'
          )
          ?.textContent?.trim() || "",
      score:
        card
          .querySelector(
            '[data-testid="review-score"] > div > div:nth-of-type(2)'
          )
          ?.textContent?.trim() || "",
      positive:
        card
          .querySelector('[data-testid="review-positive-text"]')
          ?.textContent?.trim() || "",
      negative:
        card
          .querySelector('[data-testid="review-negative-text"]')
          ?.textContent?.trim() || "",
    }))
  );
}

async function extractOverallScore(page) {
  const container = page.locator('[data-testid="reviews-tab-score-header"]');

  if ((await container.count()) === 0) return null;

  return {
    scoreNumber:
      (await container
        .locator("div:first-child > div:nth-child(2)")
        .first()
        .textContent())?.trim() || "",
    scoreText:
      (await container
        .locator("div:first-child > div:nth-child(4) > div:first-child")
        .first()
        .textContent())?.trim() || "",
    reviewsText:
      (await container
        .locator("div:first-child > div:nth-child(4) > div:nth-child(2)")
        .textContent())?.trim() || "",
  };
}

async function goToNextPage(page) {
  const firstCard = page.locator('[data-testid="review-card"]').first();
  const oldHandle = await firstCard.elementHandle();
  if (!oldHandle) return false;

  const nextButton = page.locator(
    '[data-testid="review-list-container"] div[role="navigation"] > div > div > div > div:last-child button'
  );

  if ((await nextButton.count()) === 0) return false;

  const disabled = await nextButton.isDisabled().catch(() => false);
  if (disabled) return false;

  await nextButton.scrollIntoViewIfNeeded();
  await nextButton.click({ force: true });

  try {
    await page.waitForFunction((el) => !document.contains(el), oldHandle, {
      timeout: 15000,
    });
  } catch {
    await page.waitForTimeout(3000);
  }

  await page.waitForSelector('[data-testid="review-card"]', {
    timeout: 15000,
  });

  return true;
}

// -------------------- DB INSERTS --------------------
async function insertScrapeRun(db, overallScore) {
  const [result] = await db.execute(
    `
    INSERT INTO scrape_runs (score_number, score_text, reviews_text)
    VALUES (?, ?, ?)
  `,
    [
      overallScore?.scoreNumber?.replace(",", ".") || null,
      overallScore?.scoreText || null,
      overallScore?.reviewsText || null,
    ]
  );

  return result.insertId;
}

async function insertReviews(db, reviews, runId) {
  for (const r of reviews) {
    const cleanScore = r.score
      ? parseFloat(r.score.replace(",", "."))
      : null;

    await db.execute(
      `
      INSERT INTO reviews (name, country, score, positive, negative, scrape_run_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
      [
        r.name,
        r.country,
        cleanScore,
        r.positive,
        r.negative,
        runId,
      ]
    );
  }
}

// -------------------- MAIN --------------------
async function scrapeReviews() {
  console.log("Starting Booking scrape...");

  const db = await getDb();

  const { browser, context } = await launchBrowser();
  const page = await createPage(context);

  const allReviews = [];

  try {
    await navigateToPage(page, BOOKING_URL);
    await acceptCookies(page);

    await openReviews(page);

    const overallScore = await extractOverallScore(page);
    console.log("Overall score:", overallScore);

    // save scrape run FIRST
    const runId = await insertScrapeRun(db, overallScore);
    console.log("Scrape run ID:", runId);

    // collect reviews
    while (true) {
      const reviews = await extractReviews(page);
      allReviews.push(...reviews);

      const hasNext = await goToNextPage(page);
      if (!hasNext) break;
    }

    // insert reviews in DB
    await insertReviews(db, allReviews, runId);

    console.log("DONE. Total reviews:", allReviews.length);
  } catch (err) {
    console.error("SCRAPE ERROR:", err);
  } finally {
    await browser.close();
    await db.end();
  }
}

if (require.main === module) {
  scrapeReviews();
}

module.exports = {
  extractReviews,
  extractOverallScore,
};