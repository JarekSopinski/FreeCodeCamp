/*
https://www.freecodecamp.org/challenges/roman-numeral-converter

INSTRUCTIONS FROM FCC:
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
 */

const convertToRoman = arabicNumber => {

    typeof(arabicNumber) !== 'number' ? alert("You didn't pass a number!") : null;
    // checking if an argument is a number, otherwise returning error message

    const romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let romanNumber = '';

    for (let key in romanSymbols) {
        //console.log(`key: ${key}`);
        //console.log(`value: ${romanSymbols[key]}`);

        while (arabicNumber >= romanSymbols[key]) {

            romanNumber += key;
            arabicNumber -= romanSymbols[key];
            //console.log(`Number is decreased: ${arabicNumber}`);
            //console.log(`Building a roman number: ${romanNumber}`);

        } // end of while loop (second level)

    } // end of for loop (first level)

    return romanNumber

};

convertToRoman(99); // "XCIX"
convertToRoman(500); // "D"
convertToRoman(3999); // "MMMCMXCIX"

/*
EXPLANATION:

1) In romanToArabic object, every key is a roman symbol and every value is a corresponding arabic number;
2) For loop goes through all values, until it finds a number less or equal than 'arabicNumber' (our argument);
3) Than a roman number is built by adding roman symbols (keys) to an empty string (declared previously in 'romanNumber' variable)'
4) Every time a roman symbol is added, the value of arabicNumber (argument) is decreased by a corresponding key's value.
If this value wasn't decreased, roman symbols would be added infinitely.
5) If the value decreases beyond key's value, a while loop ends and a for loop moves to a lower roman symbol.
Than a while loop can run again on a lower key's value.

Uncomment all console logs and carefully read through all logs for a better understanding of this process!

DIFFICULTY: 8.5/10 (no doubt the hardest of all challenges from first two levels)
 */



