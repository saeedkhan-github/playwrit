import {test,expect} from '@playwright/test';


test.skip('test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
      // Select the textarea element
  const textarea = await page.$('#hot-spot');

  // Scroll the textarea into view
  await textarea.scrollIntoViewIfNeeded();

  // Perform any other actions or assertions
  const isVisible = await textarea.isVisible();
  expect(isVisible).toBe(true);

    await expect(page.locator('#hot-spot')).toHaveAttribute('oncontextmenu')
  

  });

  test('test scroll the element into view', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      // Select the textarea element
  const textarea = await page.$('//a[normalize-space()="Contact info"]');

  await textarea.scrollIntoViewIfNeeded();

 
  

  });