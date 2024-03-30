import { test, expect } from '@playwright/test';

let  webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    webContext = await browser.newContext({storageState:'hucustate.json'});
})
test('test', async ({}) => {
    const page = await webContext.newPage();
    await page.goto('https://webapp.hucu.us/');

    let verifypin= await page.getByRole('header',{name:'Verify Pin'});
    if(verifypin.count(1)){ // Resume Session if the user session is expired
        await page.getByRole('textbox').first().fill('1');
        await page.getByRole('textbox').nth(1).fill('1');
        await page.getByRole('textbox').nth(2).fill('1');
        await page.getByRole('textbox').nth(3).fill('1');
    //   await Promise.all(pinbox.map(async (element, index) => {page.element.fill('1');}));
    }
   
    await page.locator('div[class="location-info"]').filter({ hasText: 'Toronto' }).click();
    await page.getByText('NewHospic').click();
    // await page.getByText('Test604').click();

    await page.waitForTimeout(10000);
});