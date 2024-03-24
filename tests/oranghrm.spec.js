import { test, expect } from '@playwright/test';

  


test.describe('group', {
  tag: '@report',
}, () => {
  test('test report header',{
    tag:['@HRM']
  }, async ({ page }) => {
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await  page.waitForTimeout(5000);
  await page.locator('//input[@placeholder="Username"]').fill('Admin')
  await page.locator('//input[@placeholder="Password"]').fill('admin123')
  await page.locator('button[type="submit"]').click();

  await page.locator('//a[@class="oxd-main-menu-item active"]').click();
  // await page.getByRole('listitem').filter({has:page.getByRole('link',{name:'Leave'})}).click();
  // await page.waitForTimeout(5000);

  });

  test('test full report', {
    tag: ['@slow', '@vrt'],
  }, async ({ page }) => {
    console.log('Testing Tag with Slow');
  });
});