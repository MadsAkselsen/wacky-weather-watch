const { devices } = require('@playwright/test');

/**
 * See https://playwright.dev/docs/test-configuration.
 */
module.exports = {
    testDir: './tests',
    /* Run tests in three browsers. */
    projects: [
        { 
            name: 'chromium', 
            use: { 
                ...devices['Desktop Chrome'], 
                screenshot: 'only-on-failure',
            } 
        },
        { 
            name: 'firefox', 
            use: { 
                ...devices['Desktop Firefox'], 
                screenshot: 'only-on-failure',
            } 
        },
        { 
            name: 'webkit', 
            use: { 
                ...devices['Desktop Safari'], 
                screenshot: 'only-on-failure',
            } 
        },
    ],
    webServer: {
        command: 'npm start',
        port: 3000,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    use: {
        // Base settings for all tests
        screenshot: 'only-on-failure',
    },
    // Output directory for test artifacts such as screenshots
    outputDir: './playwright-report/',
};

// Run tests in all browsers: `npx playwright test`
// Run tests in a specific browser: `npx playwright test --project=chromium`
