import readlineSync from 'readline-sync';
import indexFunction from '../src/index.js';

const firstStatement = 'Find the greatest common divisor of given numbers.';

const mainPart = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };
    const whatGCD = (randomNumber1, randomNumber2) => {
        //greatest common divisor
    };
    function NOD(A)
    {   
        var n = A.length, x = Math.abs(A[0]);
        for (var i = 1; i < n; i++)
        { var y = Math.abs(A[ i ]);
        while (x && y){ x > y ? x %= y : y %= x; }
        x += y;
        }
        return x;
    }
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = [getRandomInt(100),getRandomInt(100)];
        //const randomNumber2 = getRandomInt(100);
        const nod = NOD(randomNumber);
        console.log(`${'Question:'} ${randomNumber[0]} ${randomNumber[1]}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer == nod) {
            console.log('Correct!');
        } else {
            console.log('Incorrect!');
        }
    }
}

indexFunction(firstStatement, mainPart);