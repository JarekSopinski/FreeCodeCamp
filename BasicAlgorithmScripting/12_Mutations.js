/*
https://www.freecodecamp.org/challenges/mutations

INSTRUCTIONS FROM FCC:
Return true if the string in the first element of the array contains all of the letters
of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the
second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello"
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters
in "line" are present in "Alien".

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
*/

const mutation = arr => {

    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1].toLowerCase();

    const firstWordArray = firstWord.split('');
    const secondWordArray = secondWord.split('');

    const sameLetters = [];

    for (let i = 0; i < secondWordArray.length; i++) {
        if (firstWordArray.includes(secondWordArray[i])) {
            sameLetters.push(secondWordArray[i])
        }
    } // end of loop

    let sameLettersToStr = sameLetters.join('');
    let secondWordArrayToStr = secondWordArray.join('');

    return sameLettersToStr === secondWordArrayToStr;
};

console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["hello", "Hello"])); //true

/*
EXPLANATION:

1) We break arr into two variables: firstWord and secondWord.
Also, .toLowerCase() is needed because the .includes() method is case sensitive.
2) We split these strings into arrays of letters;
3) sameLetters array will be used in comparing;
4) We run a for loop through second word;
5) Every time the loop passes, we make a test; if the firstWordArray includes
the word on index [i] in secondWordArray, this word is added to the sameLetters array.
Otherwise, if it does not pass the test, the word is discarded.
6) Now, for the test to work fine, arrays have to be joined into strings (in JS [] == [] returns false...);
7) If the result of loop is the same as secondWordArray (meaning, all letters have passed the test)
function returns true. Otherwise, it returns false.

DIFFICULTY: 4/10

 */

