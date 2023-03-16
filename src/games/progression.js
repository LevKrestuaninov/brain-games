import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const genArray = (array, lineLength) => {
  const d = getRandomInt(1, 10);
  let a1 = getRandomInt(0, 100);
  for (let i = 0; i < lineLength; i += 1) {
    array.push(a1);
    a1 += d;
  }
  return array;
};

const getDate = () => {
  const arrayLength = getRandomInt(5, 10);
  let array = [];
  array = genArray(array, arrayLength);
  const newArray = [...array];
  const newArrayIndex = getRandomInt(0, newArray.length - 1);
  newArray[newArrayIndex] = '..';
  const question = `${newArray.join(' ')}`;
  const correctAnswer = `${array[newArrayIndex]}`;
  return [question, correctAnswer];
};

const progression = () => runEngine(gameRules, getDate);
export default progression;
