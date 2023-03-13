import readlineSync from 'readline-sync';
import indexFunction from '../index.js';
import getRandomInt from '../utils.js';

const firstStatement = 'Find the greatest common divisor of given numbers.';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";
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
  const randomNumber = [getRandomInt(0, 100), getRandomInt(0, 100)];
  const nod = NOD(randomNumber);
  console.log(`${'Question:'} ${randomNumber[0]} ${randomNumber[1]}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === nod) {
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${nod}'`);
  return 0;
};

const gcd = () => indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);
export default gcd;
