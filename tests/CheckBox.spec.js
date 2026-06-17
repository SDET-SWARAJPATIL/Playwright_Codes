import {test, expect} from '@playwright/test';

test('checkbox  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  

    await page.locator('#sunday').check();   //selecting the checkbox

    await page.waitForTimeout(2000);


    await expect(page.locator('#sunday')).toBeChecked();   //verifying the checkbox is selected or not

    await page.waitForTimeout(2000);    

    await page.locator('#sunday').uncheck();   //deselecting the checkbox

    await page.waitForTimeout(2000);    

    await expect(page.locator('#sunday')).not.toBeChecked();   //verifying the checkbox is deselected or not

    await page.waitForTimeout(2000);


    //selecting multiple checkboxes
    const checkboxes = ["//label[text()='Monday']","//label[text()='Tuesday']","//label[text()='Wednesday']"   ];

    for(const locator of  checkboxes){
        await page.locator(locator).check();
    }

        await page.waitForTimeout(2000);

});