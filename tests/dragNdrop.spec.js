import { test, expect } from '@playwright/test';

test('Drag and Drop item', async ({ page }) => {
    await page.goto('https://drag-and-drop-tricks.webflow.io/');

    const el = page.locator('div[class="draggable correct ui-draggable ui-draggable-handle"] div[class="draggable_fill"]')
    const targt = page.locator('.dropzone')
    
    await el.dragTo(targt);

    await page.waitForTimeout(3000);
});