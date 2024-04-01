import { test, expect } from '@playwright/test';

test('Auto Complete ', async ({ page }) => {
    await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/');

    await page.locator('//input[@id="autocomplete-default"]').fill('Ch');
    await page.locator('#autocomplete-default__listbox').filter({hasText:'China'}).click();

    await page.waitForTimeout(5000);
});