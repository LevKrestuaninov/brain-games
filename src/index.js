import readlineSync from 'readline-sync';

const indexFunction = (firstStatement, mainPart, correctAnswer, incorrectAnswer) => {
  let name = '';
  const greeting = () => {
    console.log('Welcome to the Brain Games!');
    console.log('May I have your name?');
    name = readlineSync.question('');
    console.log(`Hello, ${name}!`);
  };
  greeting();
  console.log(firstStatement);

  for (let i = 0; i < 3; i += 1) {
    if (mainPart()) {
      console.log(correctAnswer);
    } else {
      console.log(incorrectAnswer + name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default indexFunction;
