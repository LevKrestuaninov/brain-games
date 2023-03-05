import readlineSync from 'readline-sync';
import indexFunction from '../../src/index.js';

const firstStatement = 'Answer "yes" if the number is even, otherwise answer "no".';

const mainPart = () => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let answer = '';
    switch (userAnswer) {
      case 'yes':
        if (randomNumber % 2 === 0) answer = 'Correct!';
        else answer = 'Incorrect!';
        break;
      case 'no':
        if (randomNumber % 2 !== 0) answer = 'Correct!';
        else answer = 'Incorrect!';
        break;
      default:
        answer = 'Incorrect!';
        break;
    }
    console.log(answer);
  }
};

indexFunction(firstStatement, mainPart);
