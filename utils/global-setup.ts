// import { chromium } from '@playwright/test';
// import { config } from '../config/config';
// import * as fs from 'fs';

// async function globalSetup() {
//   // Check if storage state file already exists
//   if (fs.existsSync(config.storageStatePath)) {
//     console.log(`Storage state file already exists at ${config.storageStatePath}. Skipping global setup.`);
//     return;
//   }

//   console.log('Storage state file not found. Running login and saving authentication state...');

//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Navigate to login page
//   await page.goto(`${config.baseUrl}/login`);

//   // Fill in credentials from config
//   await page.fill('[data-test="signinUsernameField"]', config.testUsername);
//   await page.fill('[data-test="signinPasswordField"]', config.testPassword);
//   await page.click('[data-test="signinSubmitBtn"]');

//   // Wait for login to complete
//   await page.waitForTimeout(config.loginTimeout);

//   // Save authentication state
//   await page.context().storageState({ path: config.storageStatePath });
//   await page.screenshot({ path: config.screenshotPath });

//   await browser.close();

//   console.log(`Authentication state saved to ${config.storageStatePath}`);
// }

// export default globalSetup;