import {test,expect} from '@playwright/test';
import exp from 'constants';
test('test 1', async ({ page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // await expect(page.locator('//legend[normalize-space()="Suggession Class Example"]')).toBeAttached();
    await expect(page.locator('//input[@id="autocomplete"]')).toBeEditable();

    
    page.on('dialog',dialog=>dialog.accept());
    await page.locator('//input[@id="confirmbtn"]').click();

    await page.locator('#mousehover').hover();
    await page.waitForTimeout(3000);


});