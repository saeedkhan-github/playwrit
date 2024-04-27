import { test, expect } from '@playwright/test';

// test.beforeEach(async({page})=>{
    

// })

test('test', async ({ page }) => {

    await page.route('https://conduit.productionready.io/api/articles*',async route=>{

    await page.route('https://conduit.productionready.io/api/articles?limit=10&offset=0', async route => {
        const response = await route.fetch(); // Continue the intercepted request
        const resBody = await response.json();

        // Modify the response body
        resBody.articles[0].title = 'This is Test title';
        resBody.articles[0].description = 'This is test description';

        // Fulfill the route with the modified response
        await route.fulfill({
            response,
            
            body: JSON.stringify(resBody) // Use the modified response body
        });
        // await route.continue({ body: JSON.stringify(resBody)});
    });


    })
    await page.goto('https://angularjs.realworld.io');

    await page.waitForTimeout(5000);
});