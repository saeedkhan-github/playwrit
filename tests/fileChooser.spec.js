import { test, expect } from '@playwright/test';

test('Upload file witout input type ', async ({ page }) => {

        await page.goto('https://easyupload.io');
        const fileChooserPromise = page.waitForEvent('filechooser');

        await page.locator('.dz-button',{ timeout: 60000 }).click();

        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./tests/FilesUploads/test.pdf');

        await page.pause(10000);

});