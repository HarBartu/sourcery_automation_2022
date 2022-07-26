// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
});

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

const ops = [
  'Add',
  'Subtract',
  'Multiply',
  'Divide',
  'Concatenate'
]

const build = '#selectBuild';
const firstNumber = '#number1Field';
const secondNumber = '#number2Field';
const selectOperation = '#selectOperationDropdown';
const calculate = '#calculateButton';
const answer = '#numberAnswerField';
const integerOnly = '#integerSelect';
const clear = '#clearButton';
const error = '#errorMsgField';

data.forEach(version => {
  test.describe(version + ': Input', () => {

    test('Should be able to see and input first number', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await isFieldAvailableAndVisible(firstNumber, page)).toBe(true);

    });  

    test('Should be able to see and input second number', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await isFieldAvailableAndVisible(secondNumber, page)).toBe(true);
      
    });  

    test('Should be able to see and input operation', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await isFieldAvailableAndVisible(selectOperation, page)).toBe(true);
      
    });  

    test('Should be able to see and click button "Calculate"', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await isFieldAvailableAndVisible(calculate, page)).toBe(true);
      
    });  

    test('Should be able to see answer', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await page.locator(answer).isVisible()).toBe(true);
      
    });  

    test('Should be able to see and click checkbox "Integer only"', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await isFieldAvailableAndVisible(integerOnly, page)).toBe(true);
      
    });  

    test('Should be able to see and click button "Clear"', async ({ page }) => {

      await page.selectOption(build, { label: version});

      expect(await isFieldAvailableAndVisible(clear, page)).toBe(true);
      
    });  
  });
 
  test.describe(version + ': Add', () => {

    test('Should be able to add two integers 2 + 3 = 5', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3', 0, page);
  
      await expect(page.locator(answer)).toHaveValue('5');
    });

    test('Should be able to add two floats 2.7 + 3.4 = 6.1', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2.7', '3.4', 0, page);
  
      await expect(page.locator(answer)).toHaveValue('6.1');
    });

    test('Should throw error "Number 1 is not a number" if first number is "a" and second not provided', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('a', '', 0, page);
  
      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 1 is not a number');
    });

    test('Should throw error "Number 2 is not a number" if second number is "a" and first not provided', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('', 'a', 0, page);

      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 2 is not a number');
    });
  
  });

  test.describe(version + ': Subtract', () => {

    test('Should be able to subtract two integers 2 - 3 = -1', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3', 1, page);

      await expect(page.locator(answer)).toHaveValue('-1');
    });

    test('Should be able to subtract two floats 2.7 - 3.4 = -0.7', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2.7', '3.4', 1, page);

      await expect(page.locator(answer)).toHaveValue('-0.7');
    });

    test('Should throw error "Number 1 is not a number" if first number is "a" and second not provided', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('a', '', 1, page);
  
      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 1 is not a number');
    });

    test('Should throw error "Number 2 is not a number" if second number is "a" and first not provided', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('', 'a', 1, page);

      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 2 is not a number');
    });
  
  });

  test.describe(version + ': Multiply', () => {

    test('Should be able to multiply two positive integers 2 * 3 = 6', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3', 2, page);

      await expect(page.locator(answer)).toHaveValue('6');
    });

    test('Should be able to multiply two positive floats 2.7 * 3.4 = 9.18', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2.7', '3.4', 2, page);

      await expect(page.locator(answer)).toHaveValue('9.18');
    });

    test('Should throw error "Number 1 is not a number" if first number is "a" and second not provided', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('a', '', 2, page);
  
      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 1 is not a number');
    });

    test('Should throw error "Number 2 is not a number" if second number is "a" and first not provided', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('', 'a', 2, page);
  
      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 2 is not a number');
    });
  
  });

  test.describe(version + ': Divide', () => {

    test('Should be able to divide two positive integers 2 / 3 = 0.6666666666666666', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3', 3, page);

      await expect(page.locator(answer)).toHaveValue('0.6666666666666666');
    });

    test('Should be able to divide two positive floats 8.5 / 0.5 = 17', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('8.5', '0.5', 3, page);

      await expect(page.locator(answer)).toHaveValue('17');
    });

    test('Should give error "Divide by zero error!" if second number is 0', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '0', 3, page);
  
      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Divide by zero error!');
    });

    test('Should throw error "Number 1 is not a number" if first number is "a" and second is 2', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('a', '2', 3, page);
  
      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 1 is not a number');
    });

    test('Should throw error "Number 2 is not a number" if second number is "a" and first is 2', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', 'a', 3, page);

      await expect(page.locator(error)).toBeVisible();
      await expect(page.locator(error)).toHaveText('Number 2 is not a number');
    });
  
  }); 

  test.describe(version + ': Concatenate', () => {

    test('Should be able to concatenate two positive integers 2 + 3 = 23', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3', 4, page);
  
      await expect(page.locator(answer)).toHaveValue('23');
    });

    test('Should be able to concatenate two positive floats 8.5 and 0.5 = 8.50.5', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('8.5', '0.5', 4, page);
  
      await expect(page.locator(answer)).toHaveValue('8.50.5');
    });

    test('Should be able to concatenate two strings made of english alphabet "aaa" + "BBB" = "aaaBBB"', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('aaa', 'BBB', 4, page);

      await expect(page.locator(answer)).toHaveValue('aaaBBB');
    });

    test('Should be able to concatenate two strings made of special symbols "!#@$" + "*&^*" = "!#@$*&^*"', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('!#@$', '*&^*', 4, page);

      await expect(page.locator(answer)).toHaveValue('!#@$*&^*');
    });

    test('Should be able to concatenate two strings made of complex special symbols "γεØÆ" + "败敗" = "γεØÆ败敗"', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('γεØÆ', '败敗', 4, page);

      await expect(page.locator(answer)).toHaveValue('γεØÆ败敗');
    });

    test('Should be able to concatenate two strings that contain escape symbols "\\n\\t\"" + "\\r\'" = "\\n\\t\"\\r\'"', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('\\n\\t\"', '\\r\'', 4, page);

      await expect(page.locator(answer)).toHaveValue('\\n\\t\"\\r\'');
    });

    test('Should only accept 10 characters when first number input is longer "0123456789aa" and "bbb" = "0123456789bbb"', async ({ page }) => {
      await page.selectOption(build, { label: version});

      await doOperation('0123456789aa', 'bbb', 4, page);

      await expect(page.locator(answer)).toHaveValue('0123456789bbb');
    });

    test('Should only accept 10 characters when second number input is longer "bbb" and "0123456789aaa" = "bbb0123456789"', async ({ page }) => {
      await page.selectOption(build, { label: version});

      await doOperation('bbb', '0123456789aaa', 4, page);

      await expect(page.locator(answer)).toHaveValue('bbb0123456789');
    });
  
  }); 

  test.describe(version + ': Extra Funcionality', () => {

    test('Checkbox "Integers only" should be hidden when "Concatenate" operation is chosen', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      if (await isFieldAvailableAndVisible(selectOperation, page))
      {
        page.selectOption(selectOperation, {label: ops[4]});
      }
      else
      {
        throw "Operation selection is disabled or invisible";
      }
  
      expect(await page.locator(integerOnly).isVisible()).not.toBe(true);      
    });

    test('Checkbox "Integers only" should be visible when "Add" operation is chosen', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      if (await isFieldAvailableAndVisible(selectOperation, page))
      {
        page.selectOption(selectOperation, {label: ops[0]});
      }
      else
      {
        throw "Operation selection is disabled or invisible";
      }
  
      expect(await page.locator(integerOnly).isVisible()).toBe(true);      
    });

    test('Should be able to hide/unhide fractional part of positive answer with checkbox "Intergers only', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3.5', 0, page);

      //Sometimes calculations take some time and checkbox is not loaded in time
      await page.waitForTimeout(1000);
      //-------------------------------------------------------------------------

      await expect(page.locator(answer), "Calculation failed").toHaveValue('5.5');

      if (await isFieldAvailableAndVisible(integerOnly, page))
      {
        await page.locator(integerOnly).click();
      }
      else{
        throw "Checkbox is invisible or disabled"
      }

      await expect(page.locator(answer), "Checking 'Integers only' did not remove fractorial part").toHaveValue('5');

      if (await isFieldAvailableAndVisible(integerOnly, page))
      {
        await page.locator(integerOnly).click();
      }
      else{
        throw "Checkbox is invisible or disabled"
      }
  
      await expect(page.locator(answer)).toHaveValue('5.5');   
    });

    test('Should be able to empty answer field with button "Clear', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      await doOperation('2', '3', 0, page);

      //Sometimes calculations take some time and checkbox is not loaded in time
      await page.waitForTimeout(1000);
      //-------------------------------------------------------------------------

      await expect(page.locator(answer), "Calculation failed").toHaveValue('5');

      if (await isFieldAvailableAndVisible(clear, page))
      {
        await page.locator(clear).click();
      }
      else{
        throw "Button 'Clear' is invisible or disabled"
      }
  
      await expect(page.locator(answer)).toHaveValue(''); 
    });

    test('Clicking "Clear" button should uncheck "Integer only" checkbox', async ({ page }) => {
      
      await page.selectOption(build, { label: version});

      if (!await page.locator(integerOnly).isChecked())
      {      
        if (await isFieldAvailableAndVisible(integerOnly, page))
        {
          await page.locator(integerOnly).click();
        }
        else{
          throw "Checkbox 'Integer only' is invisible or disabled"
        }
      }

      if (await isFieldAvailableAndVisible(clear, page))
      {
        await page.locator(clear).click();
      }
      else{
        throw "Button 'Clear'is invisible or disabled"
      }
  
      await expect(page.locator(integerOnly)).not.toBeChecked;     
    });   
  });
});

async function isFieldAvailableAndVisible(fieldId, page) {
  if(!await page.locator(fieldId).isVisible()) return false;

  else if(!await page.locator(fieldId).isEnabled()) return false;

  else return true;
}

async function doOperation (input1, input2, operation, page) {
  if (await isFieldAvailableAndVisible(firstNumber, page))
  {
    await page.locator(firstNumber).type(input1);
  }
  else{
    throw "First number field is disabled or invisible";
  }

  if (await isFieldAvailableAndVisible(secondNumber, page))
  {
    await page.locator(secondNumber).type(input2);
  }
  else{
    throw "Second number field is disabled or invisible";
  }

  if (await isFieldAvailableAndVisible(selectOperation, page))
  {
    await page.selectOption(selectOperation, {label: ops[operation]});
  }
  else{
    throw "Select operation field is disabled or invisible";
  }

  if (await isFieldAvailableAndVisible(calculate, page))
  {
    await page.locator(calculate).click();
  }
  else{
    throw "Calculate button is disabled or invisible";
  }
}







