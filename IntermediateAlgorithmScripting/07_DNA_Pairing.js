/*
INSTRUCTIONS FROM FCC:

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
 */

/*
NOTES

Pairs:
A-T
C-G
T-A
G-C
 */

function pairElement(string) {

    // we declare an empty array which will be the main (first-level) array:
    const firstLevelArray = [];

    // we split string into an array of letters:
    const letters = string.split('');

    for (let i = 0; i < letters.length; i++) {

        // inside for loop, we split an array into smaller chunks (each containing one letter):
        const subArray = letters.slice(i, i+1);

        // ATM we have only first pair of a DNA strand:
        const firstPart = subArray[0];

        // using switch statement, we push the correct second part to subArray:
        switch (firstPart) {
            case 'A':
                subArray.push('T');
                break;
            case 'C':
                subArray.push('G');
                break;
            case 'T':
                subArray.push('A');
                break;
            case 'G':
                subArray.push('C');
                break
        }

        // all chunks are pushed to main array:
        firstLevelArray.push(subArray)

    } // end of loop

    return firstLevelArray

}

console.log( pairElement("ATCGA") );
console.log( pairElement("TTGAG") );
console.log( pairElement("CTCTA") );


