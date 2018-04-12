/*
https://www.freecodecamp.org/challenges/confirm-the-ending
INSTRUCTIONS FROM FCC:
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the
JavaScript substring methods instead.

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
*/


const confirmEnding = (str, target) => {
    const characterCount = target.length;
    const lastLetters = str.substr(-characterCount);
    return lastLetters === target;
};

confirmEnding("Bastian", "ian"); // returns true
confirmEnding("Falcor", "fal"); // returns false

/*
EXPLANATION:

1) Number of characters in target is passed to a variable;
2) This variable is passed as an argument to .substr method, with negative value (to count from and end),
ex. if target is 3 characters long, than the last 3 characters are substracted from str;
3) If lastLetters is equal to target, function returns true.

DIFFICULTY: 3/10
 */

