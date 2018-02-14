/*
INSTRUCTIONS:
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
 */

const sumAll = arr => {

    const lowestNumber = Math.min(...arr);
    const highestNumber = Math.max(...arr);
    let sum = 0;
    for (let i = lowestNumber; i <= highestNumber; i++) {
        sum += i;
    };
    return sum
};

console.log( sumAll([1,4]) ); //10
console.log( sumAll([10, 5]) ); //45