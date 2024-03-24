import { test, expect } from '@playwright/test';


test('Automate Form', async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator("//input[@id='firstName']").fill('Saeed');
    await page.locator('//input[@id="lastName"]').fill('Khan');
    await page.locator('//label[normalize-space()="Male"]').check();
    await page.waitForTimeout(5000);

})