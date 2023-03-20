import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeOrNot = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = primeOrNot(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runEngine(gameRules, generateRound);
