import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeOrNot = (n) => {
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getData = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = primeOrNot(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const prime = () => runEngine(gameRules, getData);
export default prime;
