/*
https://www.freecodecamp.org/challenges/repeat-a-string-repeat-a-string
INSTRUCTIONS:
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.

repeatStringNumTimes("abc", 3) should return "abcabcabc".
*/

// First solution: ES6 .repeat()

const repeatStringNumTimes = (str, num) => {

    return num > 0 ? str.repeat(num) : ''

};

repeatStringNumTimes("abc", 3); // abcabcabc

// Second solution: loop

const repeatStringNumTimesLoop = (str, num) => {
    if (num > 0) {
        let repeatedStr = '';
        for (let i = 0; i < num; i++) {
            repeatedStr += str;
        }
        return repeatedStr;
    } else {
        return '';
    }
};

repeatStringNumTimesLoop('Hey!', 4); // Hey!Hey!Hey!Hey!

/*
EXPLANATION:
This is very easy with ES6 .repeat() method (first). However, if we want to give ourselves even a little challenge,
we can solve this with a for loop (second) - not that it's very hard either.

DIFFICULTY: 1/10 (first), 2/10 (second).
 */