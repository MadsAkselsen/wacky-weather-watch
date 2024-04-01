import { test, expect } from '@playwright/test';

test.describe('Navigation Interaction', () => {
	test('should navigate to the Settings page', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await page.click('text=Settings');
		await expect(page.url()).toContain('/settings');
	});
});
