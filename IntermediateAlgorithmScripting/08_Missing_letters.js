/*
INSTRUCTIONS FROM FCC:
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
 */

function fearNotLetter(string) {

    // The key to solution will be comparing string (argument) with the alphabet. But first we need to know at
    // which point to start iterating through the alphabet.

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = string.split('');

    // We need to cut out the right part of the alphabet:
    const startLetter = letters[0];
    const alphabetStart = alphabet.indexOf(startLetter);
    const partOfAlphabet = alphabet.substring(alphabetStart).split('');

    // Looking for a difference:

    let missingLetter;

    // We compare 'letters' to 'partOfAlphabet'; the first different iteration will be the missing letter.
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== partOfAlphabet[i]) {
            missingLetter = partOfAlphabet[i];
            break // Loop needs to stop after getting result, or else missing letter would be the last letter
        }
    }

    return missingLetter

}

console.log(fearNotLetter('abc')); // undefined
console.log(fearNotLetter('bde')); // c

