import { test, expect } from "@playwright/test";

test("home page loads and shows hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Ivan Serdiuk", level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Download Resume" })).toBeVisible();
});

test("resume page renders", async ({ page }) => {
  await page.goto("/resume");
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});

test("theme toggle switches to dark", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await page.getByRole("menuitem", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
});
