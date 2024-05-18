import {test,expect,context,browser} from '@playwright/test';

let context1;
let page1;

test.beforeAll('Setting browser context',async()=>{

  context1 = await browser.newContext();
 
})

test('test 1', async ({}) => {
 
  page1 = await context1.newPage();

  await page1.goto('https://example.com');
  await context1.close();
 });
