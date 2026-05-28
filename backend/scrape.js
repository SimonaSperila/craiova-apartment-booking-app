const { chromium } = require("playwright");
const fs = require("fs-extra");
const path = require("path");

const BOOKING_URL =
  "https://www.booking.com/hotel/ro/shakespeare-central-apartment.html";

async function launchBrowser() {
  return chromium.launch({ headless: false });
}

async function createPage(browser) {
  const page = await browser.newPage();
  return page;
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
  await page.locator("#reviews-tab-trigger").click();

  await page.waitForSelector('[data-testid="review-card"]', {
    timeout: 15000,
  });
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

async function goToNextPage(page) {
  const nextButton = page.locator('button[aria-label="Next page"]');

  if (!(await nextButton.count())) return false;

  const disabled = await nextButton.isDisabled().catch(() => false);
  if (disabled) return false;

  await nextButton.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  try {
    await nextButton.click({ timeout: 10000 });
  } catch {
    console.log("Retry click next...");
    await page.waitForTimeout(1500);
    await nextButton.click({ timeout: 10000 });
  }

  await page.waitForTimeout(2000);
  return true;
}

async function saveToFile(data) {
  const outputPath = path.join(__dirname, "reviews.json");

  await fs.writeJson(outputPath, data, { spaces: 2 });

  console.log(`Saved to ${outputPath}`);
}

async function scrapeReviews() {
  console.log("Starting Booking scrape...");

  const browser = await launchBrowser();
  const page = await createPage(browser);

  const allReviews = [];

  try {
    await navigateToPage(page, BOOKING_URL);
    await acceptCookies(page);
    await openReviews(page);

    while (true) {
      const reviews = await extractReviews(page);

      allReviews.push(...reviews);
      console.log(`Collected so far: ${allReviews.length}`);

      const hasNext = await goToNextPage(page);
      if (!hasNext) {
        console.log("No more pages.");
        break;
      }
    }

    await saveToFile(allReviews);

    console.log(`DONE. Total reviews: ${allReviews.length}`);
  } catch (err) {
    console.error("SCRAPE ERROR:", err);
  } finally {
    await browser.close();
  }
}

scrapeReviews();