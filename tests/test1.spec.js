import {test,expect} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://webapp.hucu.us/');
    await page.goto('https://webapp.hucu.us/chat');
    await page.goto('https://webapp.hucu.us/login');
    await page.getByPlaceholder('Username or Email').click();
    await page.getByPlaceholder('Username or Email').fill('sk.test6');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Saeed123@');
    await page.getByPlaceholder('Password').press('Enter');
    await page.goto('https://webapp.hucu.us/login/pin');
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('1');
    await page.getByRole('textbox').nth(1).fill('1');
    await page.getByRole('textbox').nth(2).fill('1');
    await page.getByRole('textbox').nth(3).fill('1');
    await page.waitForTimeout(5000);
    await page.getByRole('textbox').first().fill('1');
    await page.getByRole('textbox').nth(1).fill('1');
    await page.getByRole('textbox').nth(2).fill('1');
    await page.getByRole('textbox').nth(3).fill('1');
    await page.waitForEvent(10000);
    console.log(page.url());
    await page.getByLabel('toast').click();
    // await page.waitForSelector(getByText('Aabid ali rehman'));
    // await page.getByText('Aabid ali rehman').click();
  });