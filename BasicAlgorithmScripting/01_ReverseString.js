/*
https://www.freecodecamp.org/challenges/reverse-a-string
INSTRUCTIONS FROM FCC:

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

reverseString("hello") should become "olleh".
 */

const reverseString = (str) => {
    return str
        .split('')
        .reverse()
        .join('');
};

reverseString("hello"); // returns "olleh"

/*
EXPLANATION:

We chain three methods. First, .split() breaks a word into an array of letters.
Then .reverse() reverses these letters and finally .join() joins them back into a string.

DIFFICULTY LEVEL: 1/10
 */

