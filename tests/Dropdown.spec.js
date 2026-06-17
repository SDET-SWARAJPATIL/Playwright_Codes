import {test, expect} from '@playwright/test';

test('Dropdown  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  
        await page.waitForTimeout(3000);

    await page.locator('#country').selectOption('India');   //selecting the dropdown option
    await page.locator('#country').selectOption({label:'United Kingdom'});   //selecting the dropdown option using label
    await page.locator('#country').selectOption({index: 3});   //selecting the dropdown option using index
    await page.locator('#country').selectOption({value: 'japan'});   //selecting the dropdown option using value
    await page.waitForTimeout(2000);


    //printing the all dropdown options
    const options = await page.$$('#country option');
    console.log('Dropdown options:');
    for (const option of options) {
        const optionText = await option.textContent();
        console.log(optionText);
    }

});