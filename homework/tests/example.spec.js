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

  test.describe(version + ': Subtract', () => {

    //#region legalInputs

    test('Should be able to subtract two positive integers 2 - 3 = -1', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract two positive floats 2.7 - 3.4 = 0.7', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract two positive floats 2.8 - 3.4 = -0.6', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-0.6');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract positive integer and positive float 2 - 3.2 = -1.2', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-1.2');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract two negative integers -7 - -5 = -2', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract two negative floats -9.7 - -11.4 = 1.7', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('1.7');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract two negative floats -9.8 - -11.4 = 1.6', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('1.6');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract negative integer and negative float -8 - -9.1 = 1.1', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('1.1');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract negative and positive integers -2 - 3 = -5', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract negative integer and positive float -2 - 3.4 = -5.4', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-5.4');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should be able to subtract negative float and positive float -2.7 - 3.4 = -6.1', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-6.1');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should return opposite second number 6 as answer (-6) if first number is not provided', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
      }
      catch(e)
      {
        throw 'Incorrect "subtract" operation';
      }
    });

    test('Should give answer 0 if no numbers are provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        throw 'Incorrect "subtract" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        throw 'Incorrect "subtract" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        throw 'Incorrect "subtract" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[1]});
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
        throw 'Incorrect "subtract" operation';
      }
    });

    //#endregion
  
  });

  test.describe(version + ': Multiply', () => {

    //#region legalInputs

    test('Should be able to multiply two positive integers 2 * 3 = 6', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply two positive floats 2.7 * 3.4 = 9.18', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('9.18');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply two positive floats 2.8 * 3.4 = 9.52', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('9.52');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply positive integer and positive float 2 * 3.2 = 6.4', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('6.4');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply two negative integers -7 * -5 = 35', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('35');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply two negative floats -9.7 * -11.4 = 110.58', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('110.58');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply two negative floats -9.8 * -11.4 = 111.72', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('111.72');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply negative integer and negative float -8 * -9.1 = 72.8', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('72.8');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply negative and positive integers -2 * 3 = -6', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply negative integer and positive float -2 * 3.4 = -6.8', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-6.8');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should be able to multiply negative float and positive float -2.7 * 3.4 = -9.18', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-9.18');
      }
      catch(e)
      {
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should return 0 as answer if second number is not provided', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should return 0 as answer if first number is not provided', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
      }
    });

    test('Should give answer 0 if no numbers are provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[2]});
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
        throw 'Incorrect "multiply" operation';
      }
    });

    //#endregion
  
  });

  test.describe(version + ': Divide', () => {

    //#region legalInputs

    test('Should be able to divide two positive integers 2 / 3 = 0.6666666666666666', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('0.6666666666666666');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide two positive floats 8.5 / 0.5 = 17', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('8.5');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('0.5');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('17');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide two positive floats 18.6 / 2.4 = 7.75', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('18.6');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('2.4');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('7.75');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide positive integer and positive float 2 / 3.2 = 0.625', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('0.625');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide two negative integers -7 / -5 = 1.4', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide two negative floats -9.9 / -3.3 = 3', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-9.9');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-3.3');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('3');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide two negative floats -9.8 / -1.6 = 6.125', async ({ page }) => {
      
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
        await page.locator('#number2Field').type('-1.6');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('6.125');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide negative integer and negative float -8 / -2.5 = 3.2', async ({ page }) => {
      
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
        await page.locator('#number2Field').type('-2.5');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('3.2');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide negative and positive integers -2 / 3 = -0.6666666666666666', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-0.6666666666666666');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide negative integer and positive float -2 / 3.2 = -0.625', async ({ page }) => {
      
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
        await page.locator('#number2Field').type('3.2');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-0.625');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should be able to divide negative float and positive float -2.8 / 3.2 = -0.875', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-2.8');
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-0.875');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should return 0 as answer if first number is not provided', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        throw 'Incorrect "divide" operation';
      }
    });

    //#endregion

    //#region illegalInputs

    test('Should give error "Divide by zero error!" if no numbers are provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should give error "Divide by zero error!" if second number is not provided', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

    test('Should give error "Divide by zero error!" if second number is 0', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('8.7');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('0');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
      }
      catch(e)
      {
        throw 'Incorrect "divide" operation';
      }
    });

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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        throw 'Incorrect "divide" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        throw 'Incorrect "divide" operation';
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
        await page.selectOption('#selectOperationDropdown', {label: ops[3]});
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
        throw 'Incorrect "divide" operation';
      }
    });

    //#endregion
  
  }); 

  test.describe(version + ': Concatenate', () => {

    //#region legalInputs

    test('Should be able to concatenate two positive integers 2 + 3 = 23', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('23');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two positive floats 8.5 and 0.5 = 8.50.5', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('8.5');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('0.5');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('8.50.5');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate positive integer and positive float 2 and 3.2 = 23.2', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('23.2');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two negative integers -7 and -5 = -7-5', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-7-5');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two negative floats -9.9 and -3.3 = -9.9-3.3', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-9.9');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-3.3');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-9.9-3.3');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate negative integer and negative float -8 and -2.5 = -8-2.5', async ({ page }) => {
      
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
        await page.locator('#number2Field').type('-2.5');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-8-2.5');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate negative and positive integers -2 and 3 = -23', async ({ page }) => {
      
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
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-23');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate negative integer and positive float -2 and 3.2 = -23.2', async ({ page }) => {
      
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
        await page.locator('#number2Field').type('3.2');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-23.2');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate negative float and positive float -2.8 and 3.2 = -2.83.2', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('-2.8');
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
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('-2.83.2');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should return first number as answer if second number is not provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('6aa');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('6aa');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should return second number as answer if first number is not provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('6aa');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('6aa');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should give empty answer if no numbers are provided', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveText('');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two strings made of english alphabet "aaa" + "BBB" = "aaaBBB"', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('aaa');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('BBB');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('aaaBBB');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two strings made of special symbols "!#@$" + "*&^*" = "!#@$*&^*"', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('!#@$');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('*&^*');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('!#@$*&^*');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two strings made of complex special symbols "γεØÆ" + "败敗" = "γεØÆ败敗"', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('γεØÆ');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('败敗');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('γεØÆ败敗');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate two strings that contain escape symbols "\\n\\t\"" + "\\r\'" = "\\n\\t\"\\r\'"', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('\\n\\t\"');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('\\r\'');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('\\n\\t\"\\r\'');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should be able to concatenate string made of english alphabet, special symbols and escape symbols with float "ABC\\n@$Æ" + -19.24 = "ABC\\n@$Æ-19.24"', async ({ page }) => {
      
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('ABC\\n@$Æ');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('-19.24');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('ABC\\n@$Æ-19.24');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    //#endregion

    //#region illegalInputs

    test('Should only accept 10 characters when first number input is longer "0123456789aa" and "bbb" = "0123456789bbb"', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('0123456789aa');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('bbb');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('0123456789bbb');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should only accept 10 characters when second number input is longer "bbb" and "0123456789aaa" = "bbb0123456789"', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('bbb');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('0123456789aa');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('bbb0123456789');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });

    test('Should only accept 10 characters when both numbers input is longer "0123456789bbb" and "0123456789aaa" = "01234567890123456789"', async ({ page }) => {
      await page.selectOption('#selectBuild', { label: version});

      if (await page.locator('#number1Field').isVisible())
      {
        await page.locator('#number1Field').type('0123456789bbb');
      }
      else{
        throw "First number input field not working/missing";
      }

      if (await page.locator('#number2Field').isVisible())
      {
        await page.locator('#number2Field').type('0123456789aaa');
      }
      else{
        throw "Second number input field not working/missing";
      }

      if (await page.locator('#selectOperationDropdown').isVisible())
      {
        await page.selectOption('#selectOperationDropdown', {label: ops[4]});
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
        await expect(page.locator('#numberAnswerField')).toHaveValue('01234567890123456789');
      }
      catch(e)
      {
        throw 'Incorrect "concatenate" operation';
      }
    });
    //#endregion
  
  }); 




});

