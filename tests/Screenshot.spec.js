import {test,expect} from '@playwright/test'
test('screenshot demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:'screenshot.png', fullPage:true});
    await page.waitForTimeout(5000);    

})