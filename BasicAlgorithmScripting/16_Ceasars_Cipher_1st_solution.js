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

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/

const decodeLetterInROT13 = letter => {
    let decodedLetter;
    switch (letter) {
        case 'N':
            decodedLetter = 'A';
            break;
        case 'O':
            decodedLetter = 'B';
            break;
        case 'P':
            decodedLetter = 'C';
            break;
        case 'Q':
            decodedLetter = 'D';
            break;
        case 'R':
            decodedLetter = 'E';
            break;
        case 'S':
            decodedLetter = 'F';
            break;
        case 'T':
            decodedLetter = 'G';
            break;
        case 'U':
            decodedLetter = 'H';
            break;
        case 'V':
            decodedLetter = 'I';
            break;
        case 'W':
            decodedLetter = 'J';
            break;
        case 'X':
            decodedLetter= 'K';
            break;
        case 'Y':
            decodedLetter = 'L';
            break;
        case 'Z':
            decodedLetter = 'M';
            break;
        case 'A':
            decodedLetter = 'N';
            break;
        case 'B':
            decodedLetter = 'O';
            break;
        case 'C':
            decodedLetter = 'P';
            break;
        case 'D':
            decodedLetter = 'Q';
            break;
        case 'E':
            decodedLetter = 'R';
            break;
        case 'F':
            decodedLetter = 'S';
            break;
        case 'G':
            decodedLetter = 'T';
            break;
        case 'H':
            decodedLetter = 'U';
            break;
        case 'I':
            decodedLetter = 'V';
            break;
        case 'J':
            decodedLetter = 'W';
            break;
        case 'K':
            decodedLetter = 'X';
            break;
        case 'L':
            decodedLetter = 'Y';
            break;
        case 'M':
            decodedLetter = 'Z';
            break;
        default:
            // if letter's value isn't an alphabetical character, it's not changed:
            decodedLetter = letter;
    }
    return decodedLetter
};

const decodeStringInROT13 = initialString => {

    const initialArray = initialString.split('');
    const newArray = [];

    initialArray.forEach(letter => {
        const newLetter = decodeLetterInROT13(letter);
        newArray.push(newLetter);
    });

    return newArray.join('');
};

decodeStringInROT13('SERR PBQR PNZC'); // FREE CODE CAMP
decodeStringInROT13('SERR CVMMN!'); // FREE PIZZA!
decodeStringInROT13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.');
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.

/*
EXPLANATION:

1) We create a function which switches every letter for a different letter.
This will be used as a callback in out main function;
2) Now we move to the decodeStringInROT13 function;
3) We change a string passed to a initialString argument into an array of letters;
4) We declare newArray, which will contain letters decoded in every iteration;
5) We run a forEach method through codedArray;
6) On every iteration we use our previously created callback and pass it every letter as an argument;
7) Callback returns decoded letter, which is than passed to newLettter variable;
8) All decoded letters are passed to previously created array;
9) We return array joined into a string.

DIFFICULTY: 4/10

IMPORTANT NOTE:

This solution is not very elegant; it needs almost 100 lines of switch statement code.
Thus the second solution (see Ceasars_Cipher_2nd_solution.js file), based on Unicode, seems to
be a lot better.
On the other hand, an advantage of this solution is the fact that it can be easily modified into
coding function witch changes each letter into totally random letter or number (or any other sign).
So this time the cipher would be much harder to break - opposing to ROT13, which is very easy to decode.

 */


