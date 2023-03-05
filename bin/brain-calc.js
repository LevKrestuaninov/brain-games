import readlineSync from 'readline-sync';
import indexFunction from '../src/index.js';

const firstStatement = 'What is the result of the expression?';
const correctAnswer = 'Correct!';
const incorrectAnswer = "Let's try again, ";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};
const whatMathOperation = (randomNumber) => {
    let result = 0;
    switch (randomNumber) {
        case 0:
            return '+';
        case 1:
            return '-';
        case 2:
            return '*';
        default:
            break;    
    }
};
const whatAnswer = (operation, randomNumber1, randomNumber2) => {
    let res = 0;
    switch (operation) {
        case '+':
            res = randomNumber1 + randomNumber2;
            return res;
        case '-':
            res = randomNumber1 - randomNumber2;
            return res;
        case '*':
            res = randomNumber1 * randomNumber2;
            return res;
        default:
            break;    
    }
};
const mainPart = () => {
    const randomNumber1 = getRandomInt(100);
    const randomNumber2 = getRandomInt(100);
    const operation = whatMathOperation(getRandomInt(3));
    const expression = `${randomNumber1}${operation}${randomNumber2}`;
    const answer = whatAnswer(operation, randomNumber1, randomNumber2);

    console.log('Question: ' + expression);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == answer) {
        return 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
        return 0;
    }

}

indexFunction(firstStatement, mainPart, correctAnswer, incorrectAnswer);