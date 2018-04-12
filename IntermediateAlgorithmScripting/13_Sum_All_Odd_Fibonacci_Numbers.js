/*
https://www.freecodecamp.org/challenges/sum-all-odd-fibonacci-numbers

INSTRUCTIONS FROM FCC:
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is
the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
 */

const sumFibs = num => {

    const numbers = [];

    const fibSequence = [];
    fibSequence[0] = 0;
    fibSequence[1] = 1;

    for (let i = 2; i <= num; i++) {
        fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
        numbers.push(fibSequence[i])
    }

    numbers.unshift(1);

    const oddNumbers = numbers
        .filter(number => {return number <= num})
        .filter(number => {return number % 2 !== 0});

    return oddNumbers.reduce((prev, next) => {
        return prev + next
    },0);

};

console.log( sumFibs(1) ); // 1
console.log( sumFibs(4) ); // 5
console.log( sumFibs(1000) ); // 1785

/*
EXPLANATION:
1) We declare an empty array (numbers), which will store all numbers from Fibonacci sequence;
2) We initialize Fibonacci sequence array (fibSequence) with 0 and 1;
3) We run a loop which starts at two and over each iteration adds a previous number to a number before previous;
4) All numbers from Fibonacci sequence are stored inside previously declared 'numbers' array (line 30);
5) The correct sequence starts with [1,1], so we need to add 1 to the beginning of an array ( numbers.unshift(1) );
6) We use filter to remove all even numbers (no reminder after dividing by 2) and all numbers greater than our argument (num);
7) Finally, we add all odd numbers to each other (reduce) and return the result.

DIFFICULTY: 5/10
 */
