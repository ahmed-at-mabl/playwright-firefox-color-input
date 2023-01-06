import { test, expect } from '@playwright/test';

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
