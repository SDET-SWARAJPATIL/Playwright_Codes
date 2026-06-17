import {test, expect} from '@playwright/test';

test('radio button demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  

    await page.locator('#male').check();   //selecting the radio button

    await page.waitForTimeout(2000);

    await expect(page.locator('#male')).toBeChecked();   //verifying the radio button is selected or not

    await page.waitForTimeout(2000);

    await page.locator('#female').check();
    await page.waitForTimeout(2000);
    await expect(page.locator('#male')).not.toBeChecked();   //verifying the radio button is deselected or not

    await page.waitForTimeout(2000);
    
});