// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
});

const data = [
  'Prototype',
  //'1',
  //'2',
  //'3',
  //'4',
  //'5',
  //'6',
  //'7',
  //'8',
  //'9'
]

const ops = [
  'Add',
  'Subtract',
  'Multiply',
  'Divide',
  'Concatenate'
]

data.forEach(version => {

  test.describe(version + ': Input', () => {

    //#region 1stNumberInput
    test('Should be able to input positive integer as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('2');
  
      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('2');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input negative integer as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('-3');

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('-3');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input positive float as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('7.4');
  
      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('7.4');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input negative float as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('-11.2'); 
  
      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('-11.2');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input english alphabet letters as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('abcdefgh');

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('abcdefgh');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input simple special symbols as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('@!#$%^&*');

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('@!#$%^&*');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input complex special symbols as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number1Field').type('γεØÆ败/敗');

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('γεØÆ败/敗');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    //#endregion

    //#region 2ndNumberInput

    test('Should be able to input positive integer as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('2');
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('2');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input negative integer as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('-3');
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('-3');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input positive float as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('7.4');
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('7.4');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input negative float as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('-11.2');
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('-11.2');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input english alphabet letters as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('abcdefgh'); 
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('abcdefgh');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input simple special symbols as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('@!#$%^&*');
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('@!#$%^&*');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input complex special symbols as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.locator('#number2Field').type('γεØÆ败/敗');

      try 
      {
        await expect(page.locator('#number2Field')).toHaveValue('γεØÆ败/敗');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });

    //#endregion
  
    //#region operationInput

    test('Should be able to choose "Add" as operation', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.selectOption('#selectOperationDropdown', { label: ops[0]});
  
      try
      {
        await expect(page.locator('#selectOperationDropdown')).toHaveValue('0');
      }
      catch(e)
      {
        throw "Unable to choose operation";
      }
    });

    test('Should be able to choose "Subtract" as operation', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.selectOption('#selectOperationDropdown', { label: ops[1]});
  
      try
      {
        await expect(page.locator('#selectOperationDropdown')).toHaveValue('1');
      }
      catch(e)
      {
        throw "Unable to choose operation";
      }
    });

    test('Should be able to choose "Multiply" as operation', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.selectOption('#selectOperationDropdown', { label: ops[2]});
  
      try
      {
        await expect(page.locator('#selectOperationDropdown')).toHaveValue('2');
      }
      catch(e)
      {
        throw "Unable to choose operation";
      }
    });

    test('Should be able to choose "Divide" as operation', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.selectOption('#selectOperationDropdown', { label: ops[3]});
  
      try
      {
        await expect(page.locator('#selectOperationDropdown')).toHaveValue('3');
      }
      catch(e)
      {
        throw "Unable to choose operation";
      }
    });

    test('Should be able to choose "Concatenate" as operation', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      await page.selectOption('#selectOperationDropdown', { label: ops[4]});
  
      try
      {
        await expect(page.locator('#selectOperationDropdown')).toHaveValue('4');
      }
      catch(e)
      {
        throw "Unable to choose operation";
      }
    });

    //#endregion
  
  });

});

