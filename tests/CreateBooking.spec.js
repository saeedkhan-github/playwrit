const {test,expect } = require('@playwright/test');
const RequestData= require("../testData/API.json")

test('GET SINGLE USER',async({request})=>{

   const response = await request.post('https://restful-booker.herokuapp.com/booking',{
    data: RequestData,
   });
    let results = await response.json()
    expect(response.status()).toBe(200);
    expect(results).toHaveProperty("bookingid");
    console.log(results)
  
})