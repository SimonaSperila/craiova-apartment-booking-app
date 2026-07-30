import fs from "fs";
import path from "path";
import { chromium } from "playwright";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { extractReviews, extractOverallScore } from "./scrape.js";

const fixtureHtml = fs.readFileSync(
	path.join(__dirname, "fixtures", "booking-reviews.html"),
	"utf-8"
);

describe("scrape.js DOM extraction", () => {
	let browser;
	let page;

	beforeAll(async () => {
		browser = await chromium.launch();
		page = await browser.newPage();
	});

	afterAll(async () => {
		await browser.close();
	});

	describe("with the review markup present", () => {
		beforeAll(async () => {
			await page.setContent(fixtureHtml);
		});

		it("extracts every review card", async () => {
			const reviews = await extractReviews(page);
			expect(reviews).toHaveLength(2);
		});

		it("extracts each review's fields, including a missing negative comment", async () => {
			const [first, second] = await extractReviews(page);

			expect(first).toEqual({
				name: "Alex",
				country: "Romania",
				score: "10",
				positive: "Great location, very clean.",
				negative: "Nothing.",
			});

			expect(second).toMatchObject({
				name: "Maria",
				country: "Bulgaria",
				score: "8,5",
				positive: "Comfortable bed.",
				negative: "",
			});
		});

		it("extracts the overall score header", async () => {
			const overallScore = await extractOverallScore(page);

			expect(overallScore).toEqual({
				scoreNumber: "9.2",
				scoreText: "Wonderful",
				reviewsText: "128 reviews",
			});
		});
	});

	describe("when the score header is missing from the page", () => {
		beforeAll(async () => {
			await page.setContent("<div>No reviews yet</div>");
		});

		it("returns null instead of throwing, so a page-layout change fails loudly upstream", async () => {
			const overallScore = await extractOverallScore(page);
			expect(overallScore).toBeNull();
		});

		it("returns an empty list of reviews", async () => {
			const reviews = await extractReviews(page);
			expect(reviews).toEqual([]);
		});
	});
});
