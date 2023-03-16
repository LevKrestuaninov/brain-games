import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What is the result of the expression?';

const doMathOperation = (operation, randomNumber1, randomNumber2) => {
  let res = 0;
  switch (operation) {
    case 0:
      res = randomNumber1 + randomNumber2;
      return res;
    case 1:
      res = randomNumber1 - randomNumber2;
      return res;
    case 2:
      res = randomNumber1 * randomNumber2;
      return res;
    default:
      break;
  }
  return NaN;
};

const getData = () => {
  const operations = ['+', '-', '*'];
  const randomNumber1 = getRandomInt(0, 10);
  const randomNumber2 = getRandomInt(0, 10);
  const operation = getRandomInt(0, 2);
  const question = `${randomNumber1} ${operations[operation]} ${randomNumber2}`;
  const correctAnswer = `${doMathOperation(operation, randomNumber1, randomNumber2)}`;
  return [question, correctAnswer];
};

const calculator = () => runEngine(gameRules, getData);

export default calculator;
