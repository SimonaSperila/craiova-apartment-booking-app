const { chromium } = require("playwright");
const fs = require("fs-extra");
const path = require("path");

const BOOKING_URL =
  "https://www.booking.com/hotel/ro/shakespeare-central-apartment.html";

async function scrapeReviews() {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  try {
    await page.goto(BOOKING_URL, {
      waitUntil: "domcontentloaded",
    });

    // ACCEPT COOKIES
    const acceptButton = page.locator(
      'button:has-text("Accept")'
    );

    if (await acceptButton.count()) {
      await acceptButton.first().click();
    }

    // deschide modal reviews
    await page.locator("#reviews-tab-trigger").click();

    // așteaptă modalul
    await page.waitForSelector('[data-testid="review-card"]', {
      timeout: 15000,
    });

    // screenshot debug
    await page.screenshot({
      path: "reviews-modal.png",
      fullPage: true,
    });

    // EXTRAGE REVIEW-URI DIN MODAL
    const reviews = await page.$$eval(
      '[data-testid="review-card"]',
      (cards) => {
        return cards.map((card) => {
          const name =
            card.querySelector(
              '[data-testid="reviewer-name"]'
            )?.textContent || "";

          const score =
            card.querySelector(
              '[data-testid="review-score"]'
            )?.textContent || "";

          const positive =
            card.querySelector(
              '[data-testid="review-positive-text"]'
            )?.textContent || "";

          const negative =
            card.querySelector(
              '[data-testid="review-negative-text"]'
            )?.textContent || "";

          return {
            name: name.trim(),
            score: score.trim(),
            positive: positive.trim(),
            negative: negative.trim(),
          };
        });
      }
    );

    console.log(reviews);

    await fs.writeJson(
      path.join(__dirname, "reviews.json"),
      reviews,
      { spaces: 2 }
    );

    console.log(`Saved ${reviews.length} reviews`);
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
}

scrapeReviews();