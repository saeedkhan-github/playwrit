import { test, expect } from '@playwright/test';

test('Test for Broken Images', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/broken_images');

        await page.route('**/*',(route)=>{
            route.continue();
        })
        const brokenList =[];
        const brokenImages = await page.evaluate(async()=>{
            const images = Array.from(document.querySelectorAll('img'));

           

            for(const image of images ){
                const response =  fetch(image.src,{method: 'HEAD'});
                if(!response || response.status !==200){
                    brokenList.push(image.src);   
                }
            }
            return brokenList;
        });

        console.log(`Total Broken Images: ${brokenlist.length}`);


        

});