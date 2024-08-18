import {test,expect} from '@playwright/test';
import exp from 'constants';
import { text } from 'stream/consumers';
test.skip('test 1', async ({ page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // await expect(page.locator('//legend[normalize-space()="Suggession Class Example"]')).toBeAttached();
    // await expect(page.locator('//input[@id="autocomplete"]')).toBeEditable();

    
    // page.on('dialog',dialog=>dialog.accept());
    // await page.locator('//input[@id="confirmbtn"]').click();

    // await page.locator('#mousehover').hover();
    //   const text=  await page.locator('#openwindow').innerText();
    expect(await page.locator('#openwindow').innerText()).toContain('Open Window');
    expect(await page.locator('#openwindow')).toHaveAttribute('id','openwindow');
    await page.waitForTimeout(3000);


});

test.skip('',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    let table = await page.locator('.table-display');
    // const radioButton = await page.$('input.radioButton[type="radio"][value="radio1"]');
    await page.locator('input.radioButton[type="radio"][value="radio1"]').check();

    // Check the radio button
    // await radioButton.check();
  
    // Assert that the radio button is checked
    // const isChecked = await radioButton.isChecked();
    // expect(isChecked).toBe(true);
    // await table.scrollIntoViewIfNeeded();

    // await table.blur();
    // .table-display
})

test('drag and drop using DataTransfer', async ({ page }) => {
  await page.goto('http://drag-and-drop-tricks.webflow.io/');

  // Create a DataTransfer object
  const dataTransfer = await page.evaluateHandle(() => new DataTransfer());

  // Select the source and target elements
  const source = page.locator('.draggable_fill ').toContain(text,"Javascript"); // Replace with your source element selector
  const target = page.locator('.quiz-option is-drop'); // Replace with your target element selector

  // Dispatch dragstart event on the source element
//   await source.dispatchEvent('dragstart', { dataTransfer });

  // Dispatch drop event on the target element
//   await target.dispatchEvent('drop', { dataTransfer });

  // Dispatch dragend event on the source element
//   await source.dispatchEvent('dragend', { dataTransfer });

  // Optionally, you can add assertions to verify the result of the drag-and-drop operation
  // expect(...).toBe(...);
});
