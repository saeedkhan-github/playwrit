import {test,expect} from '@playwright/test';

test('test 1', async ({ page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('//button[normalize-space()="Home"]').dispatchEvent('click');

    
    await page.waitForTimeout(3000);


});