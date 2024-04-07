import { test, expect } from '@playwright/test';

test.use({
  colorScheme: 'dark'
});
let webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto('./login');
  await page.getByPlaceholder('Username or Email').click();
  await page.getByPlaceholder('Username or Email').fill('sk.test6');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Saeed123@');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.waitForLoadState('networkidle');
  await context.storageState({path:'hucustate.json'});
  webContext = await browser.newContext({storageState:'hucustate.json'});



})

test('test', async ({}) => {
    const page = await webContext.newPage();
    await page.goto('https://webapp.hucu.us/');

    // await page.waitForLoadState('networkidle');

});