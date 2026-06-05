const { chromium } = require("playwright");
const fs = require("fs-extra");
const path = require("path");

const BOOKING_URL =
  "https://www.booking.com/hotel/ro/shakespeare-central-apartment.html";

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

async function openReviews(page) {
  const btn = page.locator("#reviews-tab-trigger");

  await btn.waitFor({ state: "visible", timeout: 10000 });
  await btn.scrollIntoViewIfNeeded();

  // click robust + retry
  try {
    await Promise.all([
      page.waitForSelector('[data-testid="review-card"]', {
        timeout: 20000,
      }),
      btn.click(),
    ]);
  } catch {
    await btn.click({ force: true });
    await page.waitForSelector('[data-testid="review-card"]', {
      timeout: 20000,
    });
  }

  await page.waitForTimeout(2000);

  console.log(
    "reviews:",
    await page.locator('[data-testid="review-card"]').count()
  );
}

async function extractReviews(page) {
  return page.$$eval('[data-testid="review-card"]', (cards) =>
    cards.map((card) => ({
      name:
        card.querySelector('[data-testid="review-avatar"] > div > div:nth-of-type(2) > div')?.textContent?.trim() || "",
      country:
        card.querySelector('[data-testid="review-avatar"]  > div > div:nth-of-type(2) > div:nth-of-type(2) span')?.textContent?.trim() || "",
      score:
        card.querySelector('[data-testid="review-score"] > div > div:nth-of-type(2)')?.textContent?.trim() || "",
      positive:
        card.querySelector('[data-testid="review-positive-text"]')?.textContent?.trim() || "",
      negative:
        card.querySelector('[data-testid="review-negative-text"]')?.textContent?.trim() || "",
    }))
  );
}

async function extractOverallScore(page) {
  const container = page.locator('[data-testid="reviews-tab-score-header"]');

  if ((await container.count()) === 0) return null;

  return {
    scoreNumber:
      (await container.locator("div:first-child > div:nth-child(2)").first().textContent())?.trim() || "",
    scoreText:
      (await container.locator("div:first-child > div:nth-child(4) > div:first-child").first().textContent())?.trim() || "",
    reviewsText:
      (await container.locator("div:first-child > div:nth-child(4) > div:nth-child(2)").textContent())?.trim() || "",
  };
}

async function goToNextPage(page) {
  const firstCard = page.locator('[data-testid="review-card"]').first();

  // ia un element handle real (nu text)
  const oldHandle = await firstCard.elementHandle();
  if (!oldHandle) return false;

  const nextButton = page.locator('[data-testid="review-list-container"] div[role="navigation"] > div > div > div > div:last-child button');

  if ((await nextButton.count()) === 0) return false;

  const disabled = await nextButton.isDisabled().catch(() => false);
  if (disabled) return false;

  await nextButton.scrollIntoViewIfNeeded();

  // click + așteaptă schimbare DOM reală
  await nextButton.click({ force: true });

  // 🔥 CRITICAL: așteaptă ca vechiul element să dispară din DOM
  try {
    await page.waitForFunction((el) => {
      return !document.contains(el);
    }, oldHandle, { timeout: 15000 });
  } catch {
    // fallback dacă Booking face reuse de nodes
    await page.waitForTimeout(3000);
  }

  // confirmă că s-a schimbat conținutul
  await page.waitForSelector('[data-testid="review-card"]', {
    timeout: 15000,
  });

  return true;
}

async function saveToFile(data) {
  const outputPath = path.join(__dirname, "reviews.json");

  await fs.writeJson(outputPath, data, { spaces: 2 });

  console.log(`Saved to ${outputPath}`);
}

async function scrapeReviews() {
  console.log("Starting Booking scrape...");

  const { browser, context } = await launchBrowser();
  const page = await createPage(context);

  const allReviews = [];

  try {
    await navigateToPage(page, BOOKING_URL);

    await acceptCookies(page);

    await page.screenshot({ path: "step2.png", fullPage: true });

    await openReviews(page);

    await page.screenshot({ path: "step3.png", fullPage: true });

    const html = await page.content();
await fs.writeFile(
  path.join(__dirname, "step3.html"),
  html
);

    const overallScore = await extractOverallScore(page);
    console.log("Overall score:", overallScore);

    // 🔁 collect loop
    while (true) {
      const reviews = await extractReviews(page);

      allReviews.push(...reviews);

      console.log("Collected:", allReviews.length);

      const hasNext = await goToNextPage(page);
      if (!hasNext) break;
    }

    await saveToFile({
      overallScore,
      reviews: allReviews,
    });

    console.log("DONE. Total reviews:", allReviews.length);
  } catch (err) {
    console.error("SCRAPE ERROR:", err);
  } finally {
    await browser.close();
  }
}

scrapeReviews();