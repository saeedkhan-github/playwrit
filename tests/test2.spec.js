import { test, expect } from '@playwright/test';

test.describe('Test Executing ', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  test('Login into HRM-demo site', async ({ page }) => {
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.get
  });
});