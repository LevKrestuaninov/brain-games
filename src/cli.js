
import readlineSync from 'readline-sync';
const greeting = () => {
    console.log('May I have your name?');
    const name = readlineSync.question('');
    console.log('Hello, ' + name + '!');
};
export default greeting;