/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the
JavaScript substring methods instead.
*/


function confirmEnding(str, target) {
    var characterCount = target.length; // number of characters in target is passed to a variable
    var lastLetters = str.substr(-characterCount);
    /* variable from upper line is than passed as an argument to .substr method,
    with negative value (to count from and end),
    ex. if target is 3 characters long, than the last 3 characters are substracted from str.
    Result is than passed to a new variable lastLetters.
     */
    return lastLetters === target; // if lastLetters is equal to target, function returns true.
}

console.log(confirmEnding("Bastian", "ian")); // returns true
console.log(confirmEnding("Falcor", "fal")); // returns false