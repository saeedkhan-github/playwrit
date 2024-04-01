import { test, expect } from '@playwright/test';
import * as path from 'path';
let  webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    webContext = await browser.newContext({storageState:'hucustate.json'});
})
test('Visite Home Entity on Hucu', async ({}) => {
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

    await page.pause();
});

test('Upload File in the patient Chat',async()=>{
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
    await page.locator('.item .channel-container').first().click();

    // await page.locator('.attach').setInputFiles('./tests/FilesUploads/testfile.pdf');

    let [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('.attach').click(),
      ]);

      await fileChooser.setFiles('./tests/FilesUploads/test.pdf');
      await page.locator('.ui.tiny.icon.primary.button.send-button').click();
    await page.pause();

})