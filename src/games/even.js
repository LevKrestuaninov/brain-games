import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenOrNot = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(1, 50);
  const question = `${number}`;
  const correctAnswer = evenOrNot(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runEngine(gameRules, generateRound);
