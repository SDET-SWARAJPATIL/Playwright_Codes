import {test, expect} from '@playwright/test';

test('radio button demo', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');  

    const point =await page.locator("//button[text()='Point Me']");
    point.hover();   //hovering the mouse on the element

    await page.waitForTimeout(4000);


    //double click action
    const doubleClick = await page.locator("//button[text()='Copy Text']");
    doubleClick.dblclick();

    await expect(page.locator('#field2')).toHaveValue('Hello World!');   //verifying the text is copied or not
        await page.waitForTimeout(4000);




        //drag and drop action
        const source = await page.locator('#draggable');
        const target = await page.locator('#droppable');
        await source.dragTo(target);

        await page.waitForTimeout(4000);


        //slider action
        const slider = await page.locator('#slider-range');
        const boundingBox = await slider.boundingBox();
        const startX = boundingBox.x + boundingBox.width / 2;
        const startY = boundingBox.y + boundingBox.height / 2;
        const endX = startX + 100;

                await page.waitForTimeout(4000);


});