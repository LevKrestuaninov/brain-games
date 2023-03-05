import readlineSync from 'readline-sync';
import indexFunction from '../../src/index.js';

const firstStatement = 'What number is missing in the progression?';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";
const getRandomInt = (max) => Math.floor(Math.random() * max);

const genLength = () => {
  let lineLength = 0;
  while (lineLength < 5) {
    lineLength = getRandomInt(10);
  }
  return lineLength;
};
const genArray = (array, lineLength) => {
  let d = 0;
  while (d < 1) {
    d = getRandomInt(10);
  }
  let a1 = getRandomInt(100);
  for (let i = 0; i < lineLength; i += 1) {
    array.push(a1);
    a1 += d;
  }
  return array;
};

const mainPart = () => {
  let array = [];
  array = genArray(array, genLength());
  const newArray = [...array];
  const newArrayIndex = getRandomInt(newArray.length);
  newArray[newArrayIndex] = '...';
  console.log(`${'Question:'} ${newArray}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === array[newArrayIndex]) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${array[newArrayIndex]}'`);
  return 0;
};

indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);
