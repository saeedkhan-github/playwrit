import { test, expect } from '@playwright/test';
import * as path from 'path';
let  webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    webContext = await browser.newContext({storageState:'hucustate.json'});
})


test.skip('API Request testing',async()=>{
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
    await page.route('https://api.hucu.us/api/v2/entities/*/locations/*/groups/*/messages/mark-read', async route=>{
        const respone= await route.fetch();
        const json= await respone.json();
        json.message['data']=[1];
        await route.fulfill({respone,json});
        console.log(json);

    })
    await page.locator('.item .channel-container').first().click();
    // await page.pause();

    

})