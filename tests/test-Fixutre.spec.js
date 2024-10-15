import {test } from "../fixutres/user-data";
import {expect } from '@playwright/test'
test.beforeEach("login",async({page,logindata})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(logindata.username);
    await page.getByPlaceholder('Password').fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
})

test('Visit OrangeHRM',async({page})=>{
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toHaveText('Dashboard');

})