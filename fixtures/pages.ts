import { test as base } from '@playwright/test';
import { DashboardPage } from '../pages/dashBoard';

/**
 * Extended test fixtures for Page Object Models
 * This reduces boilerplate by auto-initializing page objects
 */
type PageFixtures = {
  dashboardPage: DashboardPage;
};

/**
 * Extend Playwright's base test with custom fixtures
 * Usage: import { test, expect } from '../fixtures/pages';
 */
export const test = base.extend<PageFixtures>({
  dashboardPage: async ({ page }, use) => {
    // Setup: Create the DashboardPage instance
    const dashboardPage = new DashboardPage(page);

    // Provide the fixture to the test
    await use(dashboardPage);

    // Teardown: Add any cleanup logic here if needed
  },
});

export { expect } from '@playwright/test';
