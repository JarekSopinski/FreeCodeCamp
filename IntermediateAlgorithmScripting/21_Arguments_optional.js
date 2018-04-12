/*
https://www.freecodecamp.org/challenges/arguments-optional
INSTRUCTIONS FROM FCC:

Create a function that sums two arguments together.
If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
 */


function addTogether() {

    const [a, b] = arguments;
    const isNumber = (num) => typeof(num) === 'number';

    if (arguments.length === 1 && isNumber(a)) {
        return (c) => {return isNumber(c) ? a + c : undefined}}
        else {return isNumber(a) && isNumber(b) ? a + b : undefined}
}

/*
EXPLANATION:

1) We use destructuring to pass arguments to variables (a, b);
2) We declare a function which will be used as a callback to check if argument is a number ( isNumber() );
3) If we have only one arg that is a proper number we run anonymous function which awaits third argument and adds this argument to the first argument
(we also check is this new argument is a proper number);
4) Otherwise, when there are two arguments, we simply add them (after running check with isNumber() ).

DIFFICULTY: 4/10
 */



