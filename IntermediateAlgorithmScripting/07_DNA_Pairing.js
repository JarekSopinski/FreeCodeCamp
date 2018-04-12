/*
https://www.freecodecamp.org/challenges/dna-pairing

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

const pairElement = string => {


    const firstLevelArray = [];
    const letters = string.split('');

    for (let i = 0; i < letters.length; i++) {

        const subArray = letters.slice(i, i+1);
        const firstPart = subArray[0];

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

        firstLevelArray.push(subArray)

    } // end of loop

    return firstLevelArray

};

pairElement("ATCGA"); //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG"); //[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

/*
EXPLANATION:

1) We declare an empty array (firstLevelArray) which will be the main (first-level) array;
2) We split a string passed inside argument into an array of letters and run a loop through it;
3) Inside our for loop we split an array into smaller chunks (each containing one letter):
4) Variable firstPart keeps first pair of a DNA strand;
5) We use switch statement to push the correct second part to subArray;
6) All chunks are pushed to main array.

DIFFICULTY: 4.5 /10

 */


