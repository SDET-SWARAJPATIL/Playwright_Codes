import {test,expect} from '@playwright/test'
test(' full page screenshot demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:'screenshot.png', fullPage:true});
    await page.waitForTimeout(5000);    

}) 

test('page screenshot demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:'tests\\Screenshots' + Date.now() + 'page.png'});
    await page.waitForTimeout(5000);    

}) 

test(' particular element page screenshot demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//h1[@class="title"]').screenshot({path:'tests\\Screenshots' + Date.now() + 'element.png'});
    await page.waitForTimeout(5000);    

}) 