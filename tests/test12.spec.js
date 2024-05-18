import { test, expect,firefox} from '@playwright/test';

// test.use({
//   geolocation: { longitude: 41.890221, latitude: 12.492348 },
//   permissions: ['geolocation'],
// });

test('my test with geolocation', async ({}) => {

  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  // await browser.close();
  
});
