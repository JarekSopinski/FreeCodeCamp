/*
INSTRUCTIONS FROM FCC:

Return an English translated sentence of the passed binary string.
The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001
01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
should return "Aren't bonfires fun!?"
 */

function binaryAgent(binarySentence) {

    // Every part of binary string (01000001) represents one sing (letter), so we need to split them into an array:
    const binaryLetters = binarySentence.split(' ');

    // We use parseInt to translate every letter into corresponding UTF-16 index.
    // For example, parseInt('0100000', 2) returns 32, which then translates to letter 'A'.

    let utfCodes = [];

    binaryLetters.forEach(binaryString => {
        utfCodes.push(parseInt(binaryString, 2))
    });

    // We use String.fromCharCode() on every UTF-16 index to translate it into a letter:

    let letters = [];

    utfCodes.forEach(utfCode => {
        letters.push(String.fromCharCode(utfCode))
    });

    // Finally, all letters are joined back into one string:

    return letters.join('')

}

console.log( binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") );