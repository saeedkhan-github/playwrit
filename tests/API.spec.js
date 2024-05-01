const {test,expect } = require('@playwright/test');
const exp = require('constants');
const { json, text } = require('stream/consumers');

test('GET SINGLE USER',async({request})=>{

   const response = await request.get('https://reqres.in/api/users/2');
    let results = await response.json();
    expect(response.status()).toBe(200);
    expect(results.data).toHaveProperty('email','janet.weaver@reqres.in');
})