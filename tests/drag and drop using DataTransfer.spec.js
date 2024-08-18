const { test, expect } = require('@playwright/test');

test.skip('drag and drop using DataTransfer', async ({ page }) => {
  await page.goto('https://drag-and-drop-tricks.webflow.io/');

  // Create a DataTransfer object
  const dataTransfer = await page.evaluateHandle(() => new DataTransfer());

  // Select the source and target elements
  const source = await page.locator('.draggable_fill').last();// Replace with your source element selector
  const target = await page.locator('.quiz-option.is-drop'); // Replace with your target element selector

  // Dispatch dragstart event on the source element
  await source.dispatchEvent('dragstart', { dataTransfer });

  // Dispatch drop event on the target element
  await target.dispatchEvent('drop', { dataTransfer });

  // Dispatch dragend event on the source element
  await source.dispatchEvent('dragend', { dataTransfer });

 
});

test('drag and drop Test', async ({ page }) => {
  await page.goto('https://drag-and-drop-tricks.webflow.io/');


  const source = await page.locator('.draggable_fill').last(); // Replace with your source element selector
  expect(await source.evaluate(el=>el.innerText)).toBe('Javascript')

  const target = await page.locator('.quiz-option.is-drop'); // Replace with your target element selector

  await source.dragTo(target);
  expect(await page.locator('.success_text')).toHaveText('correct');
 
 
});
