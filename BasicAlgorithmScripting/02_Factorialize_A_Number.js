/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive
integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorialize(num) {
    var factNum = 1;
    for(var i = 1; i <= num; i++) {
        factNum *= i;
    }
    return factNum;
}

console.log(factorialize(5));

// Alternative solution - recursive function, AKA the function that runs inside itself

function factorializeRec(num) {
    if (num === 0) { return 1; }
    return num * factorializeRec(num-1);
}

console.log(factorializeRec(5));