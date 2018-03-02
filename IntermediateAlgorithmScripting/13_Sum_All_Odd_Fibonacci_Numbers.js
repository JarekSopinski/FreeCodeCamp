/*
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

function sumFibs(num) {

    // We declare an empty array, which will store all numbers from Fibonacci sequence:
    let numbers = [];

    // We initialize Fibonacci sequence [0,1]:
    let fibSequence = [];
    fibSequence[0] = 0;
    fibSequence[1] = 1;

    // The loop starts at two and over each iteration adds a previous number two a number before previous:
    for (let i = 2; i <= num; i++) {
        fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
        // All numbers from Fibonacci sequence are stored inside previously declared 'numbers' array:
        numbers.push(fibSequence[i])
    }

    // The correct sequence starts with [1,1], so we need to add 1 to the beginning of an array:
    numbers.unshift(1);

    // We remove all even numbers (no reminder after dividing by 2) and all numbers greater than our argument (num):
    const oddNumbers = numbers
        .filter(number => {return number <= num})
        .filter(number => {return number % 2 !== 0});

    // Finally, we add all odd numbers to each other and return the result:
    return oddNumbers.reduce((prev, next) => {
        return prev + next
    },0);

}

console.log( sumFibs(1) ); // 1
console.log( sumFibs(4) ); // 5
console.log( sumFibs(1000) ); // 1785
