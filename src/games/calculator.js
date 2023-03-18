import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What is the result of the expression?';

const doMathOperation = (operation, num1, num2) => {
  let res = 0;
  switch (operation) {
    case '+':
      res = num1 + num2;
      return res;
    case '-':
      res = num1 - num2;
      return res;
    case '*':
      res = num1 * num2;
      return res;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`)
  }
  return NaN;
};

const getRandomOperator = () => { 
  const operators = ['+', '-', '*']; 
  return operators [getRandomInt(0, operators.length - 1)] 
}

const getData = () => {
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  const operation = getRandomOperator();
  const question = `${randomNumber1} ${operation} ${randomNumber2}`;
  const correctAnswer = `${doMathOperation(operation, randomNumber1, randomNumber2)}`;
  return [question, correctAnswer];
};

export default () => runEngine(gameRules, getData);
