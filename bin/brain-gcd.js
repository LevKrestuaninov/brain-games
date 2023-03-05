import readlineSync from 'readline-sync';
import indexFunction from '../src/index.js';

const firstStatement = 'Find the greatest common divisor of given numbers.';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";
const getRandomInt = (max) => Math.floor(Math.random() * max);
const NOD = (A) => {
  const n = A.length; let
    x = Math.abs(A[0]);
  for (let i = 1; i < n; i += 1) {
    let y = Math.abs(A[i]);
    while (x && y) {
      if (x > y) x %= y;
      else y %= x;
    }
    x += y;
  }
  return x;
};

const mainPart = () => {
  const randomNumber = [getRandomInt(100), getRandomInt(100)];
  const nod = NOD(randomNumber);
  console.log(`${'Question:'} ${randomNumber[0]} ${randomNumber[1]}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === nod) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${nod}'`);
  return 0;
};

indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);
