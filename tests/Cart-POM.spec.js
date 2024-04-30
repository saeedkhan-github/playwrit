import { test, expect ,request} from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';

const userEmail="saeedullah321@gmail.com";
const userPassword= "Saeed123@";




test('Automate Form', async({page})=>{

    const productName='ZARA COAT 3';
    await page.goto('https://rahulshettyacademy.com/client/');
    // await page.locator("//input[@id='userEmail']").fill('saeedullah321@gmail.com');
    // await page.locator('//input[@id="userPassword"]').fill('Saeed123@');
    // await page.locator('//input[@id="login"]').click();

    await page.waitForLoadState('networkidle');
    const login= new LoginPage(page);
   await login.ValidLogin(userEmail,userPassword)
   

   
})