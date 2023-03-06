import readlineSync from 'readline-sync';
import indexFunction from '../index.js';

const firstStatement = 'What is the result of the expression?';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";

const getRandomInt = (max) => Math.floor(Math.random() * max);
const whatMathOperation = (randomNumber) => {
  switch (randomNumber) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      break;
  }
  return NaN;
};
const whatAnswer = (operation, randomNumber1, randomNumber2) => {
  let res = 0;
  switch (operation) {
    case '+':
      res = randomNumber1 + randomNumber2;
      return res;
    case '-':
      res = randomNumber1 - randomNumber2;
      return res;
    case '*':
      res = randomNumber1 * randomNumber2;
      return res;
    default:
      break;
  }
  return NaN;
};
const mainPart = () => {
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);
  const operation = whatMathOperation(getRandomInt(3));
  const expression = `${randomNumber1}${operation}${randomNumber2}`;
  const answer = whatAnswer(operation, randomNumber1, randomNumber2);

  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === answer) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  return 0;
};

const calculator = () => indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);

export default calculator;
