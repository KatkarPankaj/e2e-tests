import { test, expect } from '../fixtures/pages';
import { PAGE_TITLES, TIMEOUTS, PROCESS_NAMES } from '../constants/test-data';

test.describe('Dashboard Tests', () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(TIMEOUTS.DEFAULT);
    await page.goto("https://automationexercise.com/");


  });

  test('should display Default Dashboard title on initial load', async ({ page }) => {

    await expect(page).toHaveTitle(PAGE_TITLES.DEFAULT_DASHBOARD);
  });

  test('should display Start Request page when clicking Start A Request', async ({ page, dashboardPage }) => {
    await dashboardPage.Addtocart.click();
    await dashboardPage.ContinueShopping.click();

  
  });

})