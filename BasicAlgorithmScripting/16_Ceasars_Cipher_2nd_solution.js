/*
https://www.freecodecamp.org/challenges/caesars-cipher

INSTRUCTIONS FROM FCC:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as
a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.

***********************************************************************

NOTE: I wasn't satisfied with the first solution (see Ceasars_Cipher_1st_solution.js file)
because it forced me to write a very long switch statement.
Instead of relying on switches, this solution is based on letter's positions in Unicode.
Thus, the code is much shorter, no need for almost 100 lines of switch statement.

***********************************************************************

HOW EXACTLY DOES ROT13 WORKS?

Input	ABCDEFGHIJKLMNOPQRSTUVWXYZ
Output	NOPQRSTUVWXYZABCDEFGHIJKLM

See also: https://en.wikipedia.org/wiki/ROT13

***********************************************************************

METHODS USED IN THIS SOLUTION:

1) .charCodeAt()
The charCodeAt() method returns an integer between 0 and 65535
representing the UTF-16 code unit at the given index
The following example returns 65, the Unicode value for A.

'ABC'.charCodeAt(0); // returns 65
'jArek'.charCodeAt(1); // 65

All Unicode indexes can be found here:
https://unicode-table.com/

2) String.fromCharCode()
The static String.fromCharCode() method returns a string created from
the specified sequence of UTF-16 code units.

String.fromCharCode(65, 66, 67) // ABC

3) .match()
The match() method searches a string for a match against a regular expression,
and returns the matches, as an Array object.
This works similar to .includes(), but .includes() doesn't work with regex.

********************************************************************

PROBLEMS I ENCOUNTERED:

1) How to decode letters while not doing anything with non-alphabetical signs?
Solution: .match() and regex

2) ROT13 moves every letter backwards by 13 places. So what to do with first 13 letters?
Solution: divide alphabet into two equal parts.

********************************************************************

FIRST STEP - Getting through non-alphabetical signs, dividing alphabet into two equal parts:

Below I write a function (just a prototype at this point - thus its name is ended with '_proto')
which first checks (using .match() and regex) if the value of 'letter' is actually a letter, and
not some non-alphabetical sign.

If it's not a letter, than the function simply returns the same value.

Than the function converts a letter into a number representing its position in Unicode (i.e. A = 65).

I pass a result to a variable 'unicodeIndex'.

Than I run a second test, to check if a letter represented by unicodeIndex belongs to the first part
or the second part of alphabet.

*******************************************************************
 */

const decodeLetterInROT13_proto = letter => {

    if (letter.match(/[\W_]/g)) {
        return letter
    } else {
        const unicodeIndex = letter.charCodeAt(0);
        if (unicodeIndex <= 77) {
            return 'first part of alphabet'
        } else {
            return 'second part of alphabet'
        }
    }

};

decodeLetterInROT13_proto('A'); // first part of alphabet
decodeLetterInROT13_proto('N'); // second part of alphabet
decodeLetterInROT13_proto('!'); // non-alphabetical sign, so the result is simply '!'

/*
*****************************************************************

SECOND STEP - moving every letter forward or backward

Now I write the actual function, modifying the prototype I've written above.

I use the fact that ROT13 breaks alphabet into two equal parts
(see image at https://en.wikipedia.org/wiki/ROT13):

(A, index = 65) to (M, index = 77)
(N, index = 78) to (Z, index = 90)

So, if a letter belongs to a first part, I move the index 13 places forward, to the second part.
Otherwise, I move the index 13 places backwards, to the first part.
In each case I pass the result to a variable 'newIndex'.

Than I use String.fromCharCode() method, to which I pass 'newIndex' as an argument.
This method converts Unicode index into it's corresponding letter.
 */

function decodeLetterInROT13(letter) {
    if (letter.match(/[\W_]/g)) {
        return letter
    } else {
        const unicodeIndex = letter.charCodeAt(0);
        let newIndex;
        if (unicodeIndex <= 77) {
            newIndex = unicodeIndex + 13;
            return String.fromCharCode(newIndex);
        } else {
            newIndex = unicodeIndex - 13;
            return String.fromCharCode(newIndex)
        }
    }
}

decodeLetterInROT13('A'); // N
decodeLetterInROT13('N'); // A
decodeLetterInROT13('!'); // non-alphabetical sign, so the result is simply '!'
decodeLetterInROT13(' '); // returns empty space

/*
************************************************************************

THIRD STEP - decoding whole sentence:

Finally, I can use the same function which I created during 1st attempt.
Again, as in 1st attempt, I use decodeLetterInROT13() function in a loop, which runs through
every letter in a sentence.
 */

const decodeStringInROT13 = str => {

    const codedArray = str.split('');
    let decodedArray = [];

    for (let i = 0; i < codedArray.length; i++) {
        let newLetter;
        newLetter = decodeLetterInROT13(codedArray[i]);
        decodedArray = decodedArray.concat(newLetter);
    }

    return decodedArray.join('');

};

console.log(decodeStringInROT13('SERR PBQR PNZC')); // FREE CODE CAMP
console.log(decodeStringInROT13('SERR CVMMN!')); // FREE PIZZA!
console.log(decodeStringInROT13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'));
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.

// DIFFICULTY: 6/10