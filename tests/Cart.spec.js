import { test, expect ,request} from '@playwright/test';

const LoginPayLoad= {userEmail:"saeedullah321@gmail.com",userPassword:"Saeed123@"};
let token;
test.beforeAll(async()=>{

    const apiContext = await request.newContext();

    const LoginResponse= await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login/",{
        data:LoginPayLoad});

    expect((await LoginResponse).ok()).toBeTruthy();
    const resJson = await LoginResponse.json();
    token = resJson.token;
    console.log(token);

})


test('Automate Form', async({page})=>{

    page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    },token)
   
    const productName='ZARA COAT 3';
    await page.goto('https://rahulshettyacademy.com/client/');
    // await page.locator("//input[@id='userEmail']").fill('saeedullah321@gmail.com');
    // await page.locator('//input[@id="userPassword"]').fill('Saeed123@');
    // await page.locator('//input[@id="login"]').click();
    await page.waitForLoadState('networkidle');
    let products =page.locator('.card-body')
    const titles = await page.locator('.card-body b').allTextContents();
    // console.log(titles);
    // console.log(titles.length);

    const count = await products.count();
    console.log(await products.count())
    for(let i=0; i<count; i++)
    {
       if( await products.nth(i).locator('b').textContent() === productName)
       {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
       }
    }
    await page.locator('//button[@routerlink="/dashboard/cart"]').click();
    await page.locator('div li').first().waitFor();
    // await page.waitForTimeout(4000);
    const bool =await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator('//button[normalize-space()="Checkout"]').click();
    const box=await page.locator('//input[@value="4542 9931 9292 2293"]');
    await box.clear();
    await box.fill('1231231313')
    await page.pause();

})