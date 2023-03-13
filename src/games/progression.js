import readlineSync from 'readline-sync';
import indexFunction from '../index.js';
import getRandomInt from '../utils.js';

const firstStatement = 'What number is missing in the progression?';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";
const genArray = (array, lineLength) => {
  const d = getRandomInt(1, 10);
  let a1 = getRandomInt(0, 100);
  for (let i = 0; i < lineLength; i += 1) {
    array.push(a1);
    a1 += d;
  }
  return array;
};

const mainPart = () => {
  const arrayLength = getRandomInt(5, 10);
  let array = [];
  array = genArray(array, arrayLength);
  const newArray = [...array];
  const newArrayIndex = getRandomInt(0, newArray.length - 1);
  newArray[newArrayIndex] = '..';
  console.log(`${'Question:'} ${newArray.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === array[newArrayIndex]) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${array[newArrayIndex]}'`);
  return 0;
};

const progression = () => indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);
export default progression;
