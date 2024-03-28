import { test, expect , request} from '@playwright/test';
import exp from 'constants';

const LoginPayLoad= {userEmail:"saeedullah321@gmail.com",userPassword:"Saeed123@"};

test.beforeAll(async()=>{

    const apiContext = await request.newContext();

    const LoginResponse=  apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login/",{
        data:LoginPayLoad});

    expect(await LoginResponse.ok());

})


