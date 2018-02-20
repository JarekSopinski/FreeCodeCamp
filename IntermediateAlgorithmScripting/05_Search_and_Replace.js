/*
INSTRUCTIONS:

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

function myReplace(oldSentence, oldWord, newWord) {

    // finding index of newWord in oldSentence
    let arrayFromString = oldSentence.toUpperCase().split(' ');
    let indexOfString = arrayFromString.indexOf(oldWord.toUpperCase());

    // getting first letter of oldWord to check if it's uppercased
    let originalWord = oldSentence.split(' ')[indexOfString];
    let firstLetterOfOriginalWord = originalWord.split('')[0];
    //console.log(firstLetterOfOriginalWord);

    // checking if first letter is in uppercase;
    let isUpperCased;
    firstLetterOfOriginalWord === firstLetterOfOriginalWord.toUpperCase() ? isUpperCased = true : isUpperCased = false;

    // if isUpperCased returns true, we change first letter:
    isUpperCased ? newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1) : null;
    //console.log(newWord);

    // replacing oldWord with newWord (uppercased or not)
    let newSentenceArray = oldSentence.split(' ');
    newSentenceArray[indexOfString] = newWord;
    return newSentenceArray.join(' ');

}

// Notice the difference between 'jumped' in each check (uppercase and lowercase):
console.log( myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped") );
// returns 'A quick brown fox Leaped over the lazy dog'
console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") );
// returns 'A quick brown fox leaped over the lazy dog'