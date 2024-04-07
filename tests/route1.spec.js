import { test, expect } from '@playwright/test';



    test("mocks a fruit and doesn't call api", async ({ page }) => {
        // Mock the api call before navigating
        await page.route('*/**/api/v1/fruits', async route => {
         const response= await route.fetch();
          const json = await response.json();
          await json.push({name:'Saeed', id:'2000'});
          await route.fulfill({response, json });
        });
        // Go to the page
        
        await page.goto('https://demo.playwright.dev/api-mocking');
      
        // Assert that the Strawberry fruit is visible
        await expect(page.getByText('Strawberry')).toBeVisible();
        await page.waitForTimeout(5000);
  
      });
