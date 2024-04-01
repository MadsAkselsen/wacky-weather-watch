import { test, expect } from '@playwright/test';

test.describe('Navigation Interaction', () => {
	test('should navigate to the Cities page', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await page.click('text=Cities');
		await expect(page.url()).toContain('/cities');
	});
});
