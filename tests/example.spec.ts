import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('enter text into a color picker element', async ({ page }) => {
  const setColor = '#281cce';
  await page.goto(
    'https://storage.googleapis.com/public-dev-test-lab/input/inputtypes.html'
  );
  const inputColorElement = await page.$('#input-color');
  await inputColorElement?.click();
  await page.fill('#input-color', setColor);
  const outputColorElement = await page.$('#output-input-color');
  expect(await outputColorElement?.innerText()).toEqual(setColor);
});
