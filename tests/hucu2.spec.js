import { test, expect } from '@playwright/test';
let  webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    webContext = await browser.newContext({storageState:'hucustate.json'});
})
test('test', async ({}) => {
    const page = await webContext.newPage();
    await page.goto('https://webapp.hucu.us');
    

});