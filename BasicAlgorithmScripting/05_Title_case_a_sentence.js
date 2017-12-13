/* ///////////// INSTRUCTIONS //////////////

Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

/////////////// STEPS /////////////////////

1) Lowercase whole string;
2) Convert string to an array;
3) Run a loop through and array, which capitalize first letter in every string;
4) Add every word from an array to each other;
5) Return string.

*/

function titleCase(str) {
    var wordsArray = str.toLowerCase().split(' '); // Whole string is lowercased and converted to an array
    var allWordsUpperCase = ''; // I declare a variable which will be used later
    for (var i = 0; i < wordsArray.length; i++) {
        eachWordUpperCase = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
        // A loop uppercases first word in every string, then adds it to the rest of each string (minus first characters -> .slice)
        allWordsUpperCase = allWordsUpperCase + ' ' + eachWordUpperCase; // All words uppercased in a loop are added to each other with spaces between them
    }
    return allWordsUpperCase.trim(); // Array is converted back to one string, .trim is used to remove whitespace at the beginning
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
