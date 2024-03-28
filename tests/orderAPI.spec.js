import { test, expect ,request} from '@playwright/test';
import { ApiUtils } from './utils/ApiUtils';

const LoginPayLoad= {userEmail:"saeedullah321@gmail.com",userPassword:"Saeed123@"};
let token;
let orderId;
const OrderPayLoad ={
  orders: [
    {
      "country": "India",
      "productOrderedId": "6581ca399fd99c85e8ee7f45"
    }
  ]
}
test.beforeAll(async()=>{

    const apiContext = await request.newContext();
    const apiUtil = new ApiUtils(apiContext,LoginPayLoad);
    

    // const LoginResponse= await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login/",{
    //     data:LoginPayLoad});

    // expect((await LoginResponse).ok()).toBeTruthy();
    // const resJson = await LoginResponse.json();
    // token = resJson.token;
    // console.log(token);


// const orderRes= await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
//   data:OrderPayLoad,
//   headers:{
//     'Authorization':token,
//     'Content-Type':'application/json'
//   }
// });
// const orderResJson= await orderRes.json();
})

test('Place Order', async({page})=>{
const apiUtils = new ApiUtils(apiContext,LoginPayLoad);
  page.addInitScript(value=>{
      window.localStorage.setItem('token',value);
  },token)

  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByRole('button', { name: ' ORDERS' }).click();

  await page.pause();
  })