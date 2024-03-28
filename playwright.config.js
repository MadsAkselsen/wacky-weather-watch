const { devices } = require('@playwright/test');

/**
 * See https://playwright.dev/docs/test-configuration.
 */
module.exports = {
  testDir: './tests',
  /* Run tests in three browsers. */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

// Run tests in all browsers: `npx playwright test`
// Run tests in specific: `npx playwright test --project=chromium`