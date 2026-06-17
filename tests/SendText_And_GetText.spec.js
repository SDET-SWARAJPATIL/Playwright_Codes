import {test,expect} from '@playwright/test';

test('send text demo',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').fill('swaraj');   //sending text to the text box

    await page.waitForTimeout(2000);
})


test('get text demo',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const text = await   page.locator('#header').textContent();
    console.log(text);
})