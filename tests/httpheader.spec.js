import { test, expect } from '@playwright/test';

test('Login with Http Credentials ', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }
    })
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await expect(page.locator('.example >h3')).toHaveText('Basic Auth');

    await page.waitForTimeout(3000);
  
});