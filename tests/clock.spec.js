import { test, expect,clock } from '@playwright/test';

test('Clock Timer Test', async ({ page }) => {
   
    await page.clock.setFixedTime(new Date('2024-02-02T10:00:00'));
await page.goto('http://127.0.0.1:5500/timer.html');
await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');

await page.clock.setFixedTime(new Date('2024-02-02T10:30:00'));
// We know that the page has a timer that updates the time every second.
await expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');

});
