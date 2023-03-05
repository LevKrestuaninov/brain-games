import readlineSync from 'readline-sync';
import indexFunction from '../src/index.js';

const firstStatement = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";
const getRandomInt = (max) => Math.floor(Math.random() * max);

const primeOrNot = (n) => {
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const mainPart = () => {
  const number = getRandomInt(100);
  const answer = primeOrNot(number);
  console.log(`${'Question:'} ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  return 0;
};

indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);
