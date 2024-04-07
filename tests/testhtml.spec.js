import { test, expect } from '@playwright/test';
import exp from 'constants';


test.skip('Testing HTML Page', async({page})=>{

    await page.goto('http://127.0.0.1:5500/tests/test.html');

    await expect(page.getByRole('listitem')).toHaveText(['apple','banana','orange']);

    // await page.getByText('orange').click();
    // await page.getByRole('listitem').filter({hasText:'orange'}).click();
    await page.getByTestId('orange').click();

    // for(const row of await page.getByRole('listitem').all()){
    //     console.log(await row.textContent());
    // }

    // await page.getByRole('listitem').all().then(rows => {
    //     rows.forEach(row => {
    //         row.textContent().then(text => {
    //             console.log(text);
    //         });
    //     });
    // });
    const rows = page.getByRole('listitem');
    const count = await rows.count();

    for(let i=0; i<count; i++){
        console.log(await rows.nth(i).textContent());
    }
    
})