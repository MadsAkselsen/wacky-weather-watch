import { test, expect } from '@playwright/test';

test.describe('Navigation Interaction', () => {
	test('should navigate to the Cities page', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		// Assuming you have text "Cities" in your nav item
		await page.click('text=Cities');
		await expect(page.url()).toContain('/cities'); // This should be the path to your Cities page
	});
});
