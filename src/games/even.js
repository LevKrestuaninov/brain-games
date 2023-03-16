import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenOrNot = (num) => num % 2 === 0;

const getData = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = evenOrNot(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const even = () => runEngine(gameRules, getData);
export default even;
