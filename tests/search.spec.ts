import { test, expect } from '@playwright/test';

/* eslint-disable testing-library/prefer-screen-queries */
test.describe('Search Functionality', () => {
	test.beforeEach(async ({ page }) => {
		// Intercepting the network request and providing a mocked response
		await page.route(
			'https://wft-geo-db.p.rapidapi.com/v1/geo/cities*',
			(route) => {
				route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify({
						// Mock response body structure based on the actual API response
						data: [
							{
								name: 'Copenhagen',
								countryCode: 'DK',
								latitude: 40.7128,
								longitude: -74.006,
							},
							// Add more mocked cities as needed
						],
					}),
				});
			},
		);
		// Mocking getWeatherByCity API call for weather data
		await page.route(
			'**/data/2.5/weather?q=Copenhagen,DK*&appid=*',
			(route) => {
				route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify({
						coord: { lon: 12.5683, lat: 55.6761 },
						weather: [
							{
								id: 800,
								main: 'Clear',
								description: 'clear sky',
								icon: '01d',
							},
						],
						base: 'stations',
						main: {
							temp: 289.92,
							feels_like: 288.34,
							temp_min: 288.71,
							temp_max: 291.15,
							pressure: 1009,
							humidity: 67,
						},
						visibility: 10000,
						wind: { speed: 3.09, deg: 140 },
						clouds: { all: 0 },
						dt: 1605182400,
						sys: {
							type: 1,
							id: 1414,
							country: 'DK',
							sunrise: 1605168023,
							sunset: 1605196501,
						},
						timezone: 3600,
						id: 2618425,
						name: 'Copenhagen',
						cod: 200,
					}),
				});
			},
		);

		// Mocking getWeatherByCity API call for forecast data
		await page.route(
			'**/data/2.5/forecast?q=Copenhagen,DK*&appid=*',
			(route) => {
				route.fulfill({
					status: 200,
					contentType: 'application/json',
					body: JSON.stringify({
						cod: '200',
						message: 0,
						cnt: 40,
						list: [
							{
								dt: 1605198000,
								main: {
									temp: 280.15,
									feels_like: 277.75,
									temp_min: 279.15,
									temp_max: 281.15,
									pressure: 1021,
									sea_level: 1021,
									grnd_level: 1016,
									humidity: 81,
									temp_kf: 1,
								},
								weather: [
									{
										id: 500,
										main: 'Rain',
										description: 'light rain',
										icon: '10d',
									},
								],
								clouds: { all: 100 },
								wind: { speed: 3.6, deg: 356, gust: 7.2 },
								visibility: 10000,
								pop: 0.48,
								sys: { pod: 'd' },
								dt_txt: '2020-11-12 15:00:00',
							},
						],
						city: {
							id: 2618425,
							name: 'Copenhagen',
							coord: { lat: 55.6761, lon: 12.5683 },
							country: 'DK',
							population: 615993,
							timezone: 3600,
							sunrise: 1605168023,
							sunset: 1605196501,
						},
					}),
				});
			},
		);
	});

	test.afterEach(async ({ page }) => {
		// Example: Clearing local storage and cookies
		await page.evaluate(() => localStorage.clear());
		await page.context().clearCookies();
		// Add any other cleanup steps necessary for your tests
	});

	test('End-to-end: should allow the user to search for a city and display weather information', async ({
		page,
	}) => {
		page.on('console', (message) => {
			console.log(`Page log: ${message.text()}`);
		});
		await page.goto('http://localhost:3000/'); // Adjust if your Search component is on a different route

		// Just before the failing line
		await page.fill('input[role="combobox"]', 'Copenhagen', {
			timeout: 2000,
		});

		await page.waitForResponse(
			(response) =>
				response
					.url()
					.includes(
						'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
					) && response.status() === 200,
			{ timeout: 2000 },
		);

		// Wait for the options to appear. This selector might need adjustment based on your actual implementation.
		await page.waitForSelector('text=Copenhagen, DK', { timeout: 2000 }); // Adjust to match an option's text

		// Click on the specific option. You might need to adjust this to fit how your options are structured.
		// await page.locator('text=Copenhagen, DK').first.waitFor({ state: "attached", timeout: 5000 });
		// await page.click('text=Copenhagen, DK', { timeout: 2000 });
		// const renderResult = render(<App />);
		await page
			.getByRole('option', { name: 'Copenhagen, DK' })
			.click({ force: true });

		await page.waitForResponse(
			(response) =>
				response
					.url()
					.includes(
						'https://api.openweathermap.org/data/2.5/weather',
					) && response.status() === 200,
			{ timeout: 2000 },
		);
		await page.waitForResponse(
			(response) =>
				response
					.url()
					.includes(
						'https://api.openweathermap.org/data/2.5/forecast',
					) && response.status() === 200,
			{ timeout: 2000 },
		);
		// Wait for UI to update
		// await page.waitForTimeout(500);
		await page.waitForSelector('text=AIR CONDITIONS', { timeout: 2000 }); // Adjust to match an option's text
		// Verify something changes in the UI to reflect the search.
		// For instance, check if a specific element that indicates successful search is present.
		// This is an example and might need adjustment to match your application's behavior.
		// console.log(await page.content());
		// await page.screenshot({ path: 'debug-screenshot.png' });
		await expect(page.locator('text="AIR CONDITIONS"')).toHaveCount(1); // Adjust the expected text to match your app
	});
});
