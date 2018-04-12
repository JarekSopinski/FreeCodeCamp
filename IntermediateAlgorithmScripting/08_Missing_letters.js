/*
https://www.freecodecamp.org/challenges/missing-letters

INSTRUCTIONS FROM FCC:
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
 */

const fearNotLetter = string => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = string.split('');

    const startLetter = letters[0];
    const alphabetStart = alphabet.indexOf(startLetter);
    const partOfAlphabet = alphabet.substring(alphabetStart).split('');

    let missingLetter;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== partOfAlphabet[i]) {
            missingLetter = partOfAlphabet[i];
            break
        }
    }

    return missingLetter

};

fearNotLetter('abc'); // undefined
fearNotLetter('bde'); // c

/*
EXPLANATION:

1) The key to this solution is comparing a string (argument) with the alphabet (first variable).
But first we need to know at which point to start iterating through the alphabet.
2) We cut out the right part of the alphabet (19-21);
3) Now we can start to look for differences.
4) Inside a loop we compare 'letters' to 'partOfAlphabet';
the first different iteration will be the missing letter.
5) Loop needs to stop after getting result, or else missing letter would be the last letter (we use break at 28);

DIFFICULTY: 4/10

 */

