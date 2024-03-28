import { test, expect } from '@playwright/test';

test.describe('App Rendering', () => {
  test('should render the main application without crashing', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveTitle(/Wacky Weather App/);
  });
});
