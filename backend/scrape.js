const { chromium } = require("playwright");
const fs = require("fs-extra");

const BOOKING_URL =
  "https://www.booking.com/hotel/ro/shakespeare-central-apartment.html";

async function scrapeReviews() {
  console.log("Starting Booking scrape...");

  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  try {
    await page.goto(BOOKING_URL, {
      waitUntil: "networkidle",
    });

    // 1. click pe Reviews tab
    await page.locator("#reviews-tab-trigger").click();
    await page.waitForTimeout(5000);

    // 2. debug (foarte important)
    await page.screenshot({ path: "reviews.png", fullPage: true });

    // 3. încearcă să găsești review-uri
    const reviews = await page.evaluate(() => {
      const text = document.body.innerText;

      const blocks = text
        .split("\n")
        .filter((t) => t.length > 80);

      return blocks.slice(0, 20).map((t) => ({
        text: t.slice(0, 300),
      }));
    });

    await fs.writeJson("reviews.json", reviews, {
      spaces: 2,
    });

    console.log("Saved reviews:", reviews.length);
  } catch (err) {
    console.error("SCRAPE ERROR:", err);
  } finally {
    await browser.close();
  }
}

scrapeReviews();