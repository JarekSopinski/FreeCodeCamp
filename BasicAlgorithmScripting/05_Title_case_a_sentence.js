/*
https://www.freecodecamp.org/challenges/title-case-a-sentence

INSTRUCTIONS FROM FCC:

Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".

*/

const titleCase = str => {
    const wordsArray = str.toLowerCase().split(' ');
    let allWordsUpperCase = '';
    let eachWordUpperCase;
    for (let i = 0; i < wordsArray.length; i++) {
        eachWordUpperCase = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
        allWordsUpperCase = allWordsUpperCase + ' ' + eachWordUpperCase}
    return allWordsUpperCase.trim();
};

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // "Here Is My Handle Here Is My Spout"

/*
EXPLANATION:

1) Whole string is lowercased and converted to an array;
2) A loop uppercases first word in every string, then adds it to the rest of each string (minus first characters -> .slice);
3) All words uppercased in a loop are added to each other with spaces between them;
4) Array is converted back to one string, .trim() is used to remove whitespace at the beginning.

DIFFICULTY: 2.5/10
 */
