import {test,expect} from '@playwright/test';

test('test 1', async ({ page}) => {
 await page.goto('https://www.saucedemo.com/');
 await page.locator('//input[@id="user-name"]').fill('standard_user');
 await page.locator('//input[@id="password"]').fill('secret_sauce');
 await page.locator('//input[@id="login-button"]').click();
 await page.locator('//select[@class="product_sort_container"]').selectOption({index:1})
await page.pause(3000);
});