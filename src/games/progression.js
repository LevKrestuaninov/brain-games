import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (a1, d, length) => {
  const progression = [];
  let difference = a1;
  for (let i = 0; i < length; i += 1) {
    progression.push(difference);
    difference += d;
  }
  return progression;
};

const generateRound = () => {
  const arrayLength = getRandomInt(5, 10);
  const d = getRandomInt(1, 10);
  const a1 = getRandomInt(0, 100);
  const progression = generateProgression(a1, d, arrayLength);
  const newProgression = [...progression];
  const newProgressionIndex = getRandomInt(0, newProgression.length - 1);
  newProgression[newProgressionIndex] = '..';
  const question = `${newProgression.join(' ')}`;
  const correctAnswer = `${progression[newProgressionIndex]}`;
  return [question, correctAnswer];
};

export default () => runEngine(gameRules, generateRound);
