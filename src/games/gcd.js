import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const GCD = (a, b) => {
  if (b !== 0) {
    return GCD(b, a % b);
  }
  return a;
};

const generateRound = () => {
  const randomNum1 = getRandomInt(1, 100);
  const randomNum2 = getRandomInt(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${GCD(randomNum1, randomNum2)}`;
  return [question, correctAnswer];
};

export default () => runEngine(gameRules, generateRound);
