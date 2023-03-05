import readlineSync from 'readline-sync';

const indexFunction =(firstStatement, mainPart) => {
let name = '';
const greeting = () => {
    console.log('Welcome to the Brain Games!');
    console.log('May I have your name?');
    name = readlineSync.question('');
    console.log(`Hello, ${name}!`);
};
greeting ();
console.log(firstStatement);
mainPart();
console.log('Congratulations, ' + name);
};

export default indexFunction