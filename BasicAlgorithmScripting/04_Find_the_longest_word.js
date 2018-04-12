/*
https://www.freecodecamp.org/challenges/find-the-longest-word-in-a-string

INSTRUCTIONS FROM FCC:
Return the length of the longest word in the provided sentence.
Your response should be a number.

findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
 */


const findLongestWord = (str) => {
    const wordsArray = str.split(' ');
    let longestWordLength = 0;
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWordLength) {
            longestWordLength = wordsArray[i].length;
        }
    }
    return longestWordLength;
};


findLongestWord("The quick brown fox jumped over the lazy dog"); // returns: 6 ('jumped')

/*
EXPLANATION:
1) We split a string into an array of words.
2) We declare variable longestWordLength, which will be used to compare lengths.
It's initialized with 0.
3) We run a for loop and on every iteration we compare length of a current word with a value
of longestWordLength. If it's bigger, we change variable's value.
4) A loop stops and we return final value of longestWordLength.

DIFFICULTY: 2/10
 */