#!/usr/bin/env node
import readlineSync from 'readline-sync';

let name = '';
const greeting = () => {
    console.log('Welcome to the Brain Games!');
    console.log('May I have your name?');
    name = readlineSync.question('');
    console.log(`Hello, ${name}!`);
};
greeting ();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 3; i += 1) {
    let randomNumber = getRandomInt(100);
    console.log('Question: ' + randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    let answer = '';
    switch (userAnswer) {
        case 'yes':
            randomNumber % 2 == 0 ? answer = 'Correct!' : answer = 'Incorrect!';
            break;
        case 'no':
            randomNumber % 2 != 0 ? answer = 'Correct!' : answer = 'Incorrect!';
            break;
        default:
            answer = 'Incorrect!'
            break;
    }
    console.log(answer);
}

console.log('Congratulations, ' + name);