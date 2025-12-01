import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Dashboard page
 * Encapsulates all dashboard interactions and locators
 */
export class DashboardPage {
    readonly page: Page;

    // Locators defined as class properties for reusability and maintainability
    readonly Addtocart: Locator;
    readonly ContinueShopping: Locator;



    constructor(page: Page) {
        this.page = page;

        // Initialize all locators
        this.Addtocart = page.getByText('Add to cart').first();
        this.ContinueShopping = page.getByRole('button', { name: 'Continue Shopping' });
        
    }

    /**
  
    /**
     * Clicks the "Start A Request" link and waits for navigation
     */
 
    /**
     * Selects the "Clavin Testing" process from the process tree
     * Note: Uses brittle nth-child selector - consider adding data-testid attributes
     */
 
}