/*
Return true if the string in the first element of the array contains all of the letters
of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the
second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello"
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters
in "line" are present in "Alien".
*/

const mutation = arr => {
    // I break arr into two variables
    // also, .toLowerCase() is needed because the .includes() method is case sensitive
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    // now I convert them to arrays, in which every letter is another element:
    let firstWordArray = firstWord.split(''); // i.e. 'hello' = [h, e, l, l, o]
    let secondWordArray = secondWord.split('');
    let sameLetters = []; // I will pass results from following test to this array
    // I run loop through the second word:
    for (let i = 0; i < secondWordArray.length; i++) {
        if (firstWordArray.includes(secondWordArray[i])) {
            // every time the loop passes, I make a test; if the firstWordArray includes
            // the word on index [i] in secondWordArray, this word is added to the sameLetters array;
            // otherwise, if it does not pass the test, the word is discarded
            sameLetters.push(secondWordArray[i])
        }
    } // end of loop
    // For the test to work fine, arrays have to be joined into strings
    // (in JS [] == [] returns false...)
    let sameLettersToStr = sameLetters.join('');
    let secondWordArrayToStr = secondWordArray.join('');
    // now, if the result of loop is the same as secondWordArray
    // (meaning, all letters passed the test)
    // function returns true. Otherwise, it returns false.
    return sameLettersToStr === secondWordArrayToStr;
};

console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["hello", "Hello"])); //true

