const {test,expect } = require('@playwright/test');
import {faker} from '@faker-js/faker';
const { DateTime } = require('luxon');

test('GET SINGLE USER',async({request})=>{
    const firstName = faker.person.firstName();
    const lastName= faker.person.lastName();
    const totalPrice= faker.number.int(1000);

    const checkInDate = DateTime.now().toFormat('yyyy-MM-dd');
    const checkOutDate= DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');


   const response = await request.post('https://restful-booker.herokuapp.com/booking',{
    data: {
        "firstname" : firstName,
        "lastname" : lastName,
        "totalprice" : totalPrice,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : checkInDate,
            "checkout" : checkOutDate
        },
        "additionalneeds" : "Breakfast"
    },
   });
    const results = await response.json()
    expect(response.status()).toBe(200);
    expect(results.booking).toHaveProperty("firstname",firstName);
    expect(results.booking).toHaveProperty("lastname",lastName);

    // console.log(results)
  
})