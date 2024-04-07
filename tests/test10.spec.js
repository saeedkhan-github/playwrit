import { test,expect } from "@playwright/test";

test('PLayWright Specail Locators',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    // await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.locator('input[id="exampleCheck1"]').check();
    await page.locator("input[id='inlineRadio2']").check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.locator('//input[@name="bday"]').click().fill("10/10/2001")

    await page.waitForTimeout(4000);

})