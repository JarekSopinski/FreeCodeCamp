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
    // which point to start and finish iterating through the alphabet.

    // For starters, let's declare two arrays which will be compared:
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letters = string.split('');

    // Now we need to get start and end index. Converting string to UTF-16 indexes will be useful:
    let indexes = [];

    // We create an array of UTF-16 indexes:
    letters.map(letter => {
        const index = letter.charCodeAt(0);
        indexes = indexes.concat(index)
    });

    // And now we can get indexes corresponding to first and last letter:
    const startIndex = Math.min(...indexes);
    const endIndex = Math.max(...indexes);
    console.log(`First letter: ${String.fromCharCode(startIndex)}`);
    console.log(`Last letter: ${String.fromCharCode(endIndex)}`);

    // We need to cut out the right part of the alphabet:

}

console.log(fearNotLetter('abce'));

