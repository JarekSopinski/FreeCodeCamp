/*
INSTRUCTIONS:
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

function decodeLetterInROT13(letter) {
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
}

function decodeStringInROT13(str) {
    // I change a string passed to a str argument into an array:
    let codedArray = str.split('');
    let decodedArray = []; //this array will contain letters decoded in every iteration
    // I run a loop through codedArray:
    for (let i = 0; i < codedArray.length; i++) {
        let newLetter;
        // I use previously created function and pass it every letter as an argument
        // function returns decoded letter, which is than passed to newLettter variable
        newLetter = decodeLetterInROT13(codedArray[i]);
        // all decoded letters are passed to previously created array using .concat()
        decodedArray = decodedArray.concat(newLetter);
    } // end of loop
    let decodedString = decodedArray.join(''); // array is converted back to a string
    return decodedString
}

console.log(decodeStringInROT13('SERR PBQR PNZC')); // FREE CODE CAMP
console.log(decodeStringInROT13('SERR CVMMN!')); // FREE PIZZA!
console.log(decodeStringInROT13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'));
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.


