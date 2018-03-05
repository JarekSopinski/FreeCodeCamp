/*
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

    const [a, b] = arguments; // we use destructuring to pass arguments to variables
    const isNumber = (num) => typeof(num) === 'number';
    // we declare a function which will be used as a callback to check if argument is a number

    if (arguments.length === 1 && isNumber(a)) { // if we have only one arg that is a proper number...
        return (c) => {return isNumber(c) ? a + c : undefined}}
        // ...than we run anonymous function which awaits third argument and adds this argument to the first argument
        // (we also check is this new argument is a proper number)
        else {return isNumber(a) && isNumber(b) ? a + b : undefined}
        // otherwise, when there are two arguments, we simply add them (after running check with isNumber() )
}



