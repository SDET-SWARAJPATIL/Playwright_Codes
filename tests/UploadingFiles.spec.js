import {test, expect} from '@playwright/test';

test('uploadingfiles  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  
    await page.locator('#singleFileInput').setInputFiles('tests\\files\\A.txt')
    
    
    
    await page.waitForTimeout(3000);

    

});