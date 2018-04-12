/*
https://www.freecodecamp.org/challenges/search-and-replace

INSTRUCTIONS:

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

const myReplace = (oldSentence, oldWord, newWord) => {

    const arrayFromString = oldSentence.toUpperCase().split(' ');
    const indexOfString = arrayFromString.indexOf(oldWord.toUpperCase());

    let originalWord = oldSentence.split(' ')[indexOfString];
    let firstLetterOfOriginalWord = originalWord.split('')[0];

    let isUpperCased;
    firstLetterOfOriginalWord === firstLetterOfOriginalWord.toUpperCase() ?
        isUpperCased = true
        :
        isUpperCased = false;

    isUpperCased ?
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
        :
        null;

    const newSentenceArray = oldSentence.split(' ');
    newSentenceArray[indexOfString] = newWord;
    return newSentenceArray.join(' ');

};

// Notice the difference between 'jumped' in each check (uppercase and lowercase):
myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");
// returns 'A quick brown fox Leaped over the lazy dog'
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// returns 'A quick brown fox leaped over the lazy dog'

/*
EXPLANATION:

1) We look for an index of a newWord in oldSentence (19-20);
2) We get first letter of oldWord to check if it's capitalized (22-23);
3) We check if first letter is capitalized (25-26);
4) If isUpperCased returns true, we change first letter (28):
5) We replace oldWord with newWord (capitalized or not).

DIFFICULTY: 5/10
 */