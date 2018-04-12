/*
https://www.freecodecamp.org/challenges/factorialize-a-number
INSTRUCTIONS FROM FCC:
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive
integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

// First solution: for loop

const factorialize = (num) => {
    let factNum = 1;
    for(let i = 1; i <= num; i++) {
        factNum *= i;
    }
    return factNum;
};

console.log(factorialize(5)); // 120

// Second solution: recursion

const factorializeRec = (num) => {

    return num === 0 ?
        1
        :
        num * factorializeRec(num-1)

};

console.log(factorializeRec(5)); // 120

/*
EXPLANATION:

In first case, we run loop multiplying all numbers smaller than argument.

In second case, we use recursion, which works similar to a while loop.
It starts with argument's value, which is decremented on each recursive callback, until
it reaches 0 and recursion stops.

DIFFICULTY: 2/10
 */