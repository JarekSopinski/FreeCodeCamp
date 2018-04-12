/*
https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

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
    }

    return sum

};

sumAll([1,4]); //10
sumAll([10, 5]); //45

/*
EXPLANATION:

1) We use spread operator with Math.min and Math.max methods to easily get biggest and lowest numbers;
2) We run a for loop which starts and lowest number and ends at biggest number;
3) On each iteration we increment value of sum;
4) We return sum.

DIFFICULTY: 2.5/10
 */