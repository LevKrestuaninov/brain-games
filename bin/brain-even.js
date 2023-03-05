import readlineSync from 'readline-sync';
import indexFunction from '../src/index.js';

const firstStatement = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";
const getRandomInt = (max) => Math.floor(Math.random() * max);
const evenOrNot = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const mainPart = () => {
  const randomNumber = getRandomInt(100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const answer = evenOrNot(randomNumber);
  if (userAnswer === answer) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  return 0;
};

indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);
