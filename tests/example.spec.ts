import { test, expect } from '@playwright/test';

test('enter text into a color picker element', async ({ page }) => {
  await page.goto(
    'https://storage.googleapis.com/public-dev-test-lab/input/inputtypes.html'
  );
  const inputColorElement = await page.$('#input-color');
  await inputColorElement?.click();
});
