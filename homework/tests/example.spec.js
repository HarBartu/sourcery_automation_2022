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
    test('Should be able to input positive integer 2 as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('2');
      }
      else{
        throw "First number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('2');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input negative integer -3 as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-3');
      }
      else{
        throw "First number input field not working/missing";
      }

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('-3');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input positive float 7.4 as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('7.4');
      }
      else{
        throw "First number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('7.4');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input negative float -11.2 as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-11.2');
      }
      else{
        throw "First number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('-11.2');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input english alphabet letters "abcdefgh" as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('abcdefgh');
      }
      else{
        throw "First number input field not working/missing";
      }

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('abcdefgh');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input simple special symbols "@!#$%^&*" as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('@!#$%^&*');
      }
      else{
        throw "First number input field not working/missing";
      }

      try
      {
        await expect(page.locator('#number1Field')).toHaveValue('@!#$%^&*');
      }
      catch(e)
      {
        throw "Unable to input first number";
      }
    });
    test('Should be able to input complex special symbols "γεØÆ败/敗" as first number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('γεØÆ败/敗');
      }
      else{
        throw "First number input field not working/missing";
      }

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

    test('Should be able to input positive integer 2 as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('2');
      }
      else{
        throw "Second number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('2');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input negative integer -3 as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-3');
      }
      else{
        throw "Second number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('-3');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input positive float as 7.4 second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('7.4');
      }
      else{
        throw "Second number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('7.4');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input negative float as -11.2 second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-11.2');
      }
      else{
        throw "Second number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('-11.2');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input english alphabet letters "abcdefgh" as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('abcdefgh');
      }
      else{
        throw "Second number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('abcdefgh');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input simple special symbols "@!#$%^&*" as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('@!#$%^&*');
      }
      else{
        throw "Second number input field not working/missing";
      }
  
      try
      {
        await expect(page.locator('#number2Field')).toHaveValue('@!#$%^&*');
      }
      catch(e)
      {
        throw "Unable to input second number";
      }
    });
    test('Should be able to input complex special symbols "γεØÆ败/敗" as second number', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('γεØÆ败/敗');
      }
      else{
        throw "Second number input field not working/missing";
      }

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

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
  
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

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
  
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

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
  
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

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
  
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

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
  
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

  test.describe(version + ': Add', () => {

    //#region legalInputs

    test('Should be able to add two positive integers 2 + 3 = 5', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('2');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('5');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add two positive floats 2.7 + 3.4 = 6.1', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('2.7');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('6.1');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add two positive floats 2.8 + 3.4 = 6.2', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('2.8');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('6.2');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add positive integer and positive float 2 + 3.2 = 5.2', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('2');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3.2');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('5.2');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add two negative integers -7 + -5 = -12', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-7');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-5');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('-12');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add two negative floats -9.7 + -11.4 = -21.1', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-9.7');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-11.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('-21.1');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add two negative floats -9.8 + -11.4 = -21.2', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-9.8');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-11.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('-21.2');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add negative integer and negative float -8 + -9.1 = -17.1', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-8');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-9.1');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('-17.1');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add negative and positive integers -2 + 3 = 1', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-2');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('1');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add negative integer and positive float -2 + 3.4 = 1.4', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-2');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('1.4');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should be able to add negative float and positive float -2.7 + 3.4 = 0.7', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-2.7');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('3.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('0.7');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should return first number -2.7 as answer if second number is not provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-2.7');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('-2.7');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should return second number 6 as answer if first number is not provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('6');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('6');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should give answer 0 if no numbers are provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#numberAnswerField')).toHaveValue('0');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    //#endregion

    //#region illegalInputs

    test('Should throw error "Number 1 is not a number" if first number is "a" and second not provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('a');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#errorMsgField')).toBeVisible();
        await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should throw error "Number 2 is not a number" if second number is "a" and first not provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('a');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#errorMsgField')).toBeVisible();
        await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    test('Should throw error "Number 1 is not a number" if both numbers are "a"', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('a');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('a');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[0]});
      }
      else{
        throw "Operation selection field not working/missing";
      }
    
      if (await page.locator('#calculateButton').isVisible())
      {
        await page.locator('#calculateButton').click();
      }
      else{
        throw "Calculate button not working/missing";
      }
  
      try
      {
        await expect(page.locator('#errorMsgField')).toBeVisible();
        await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
      }
      catch(e)
      {
        throw 'Incorrect "Add" operation';
      }
    });

    //#endregion
  
  });

});

