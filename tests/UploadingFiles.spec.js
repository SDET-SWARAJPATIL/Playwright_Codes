import { test, expect } from '@playwright/test';

test('uploadingfiles  demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  
    await page.locator('#singleFileInput').setInputFiles('tests\\files\\A.txt')
    
    

    //uploading multiple files
    await page.locator('#multipleFilesInput').setInputFiles([
        'tests\\files\\A.txt',
        'tests\\files\\sg.docx',
        'tests\\files\\Behavioral Question updated.pdf'
    ])
    
    await page.waitForTimeout(5000);

    

});