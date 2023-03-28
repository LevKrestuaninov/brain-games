import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What is the result of the expression?';

const doMathOperation = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operation} - is incorrect!`);
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
};

const generateRound = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operation = getRandomOperator();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = `${doMathOperation(operation, number1, number2)}`;
  return [question, correctAnswer];
};

export default () => runEngine(gameRules, generateRound);
