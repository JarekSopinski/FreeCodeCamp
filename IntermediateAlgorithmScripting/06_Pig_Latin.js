/*
INSTRUCTIONS FROM FCC:
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
 */

/*
NOTES:
English consonants: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.
English vowels: a, e, i, o, u

The key seems to be finding the first index at which a first vowel appears...
 */

function translatePigLatin(string) {

    if ( string.startsWith('a') || string.startsWith('e') || string.startsWith('i') || string.startsWith('o') || string.startsWith('u') ) {
        return string.concat('way')
        // condition block for an 'easy part' - when a word begins with an vowel
    } else {
        // if a word doesn't begin with a vowel... here comes a tricky part:

        // first, we split a string into an array of letters:
        const letters = string.split('');

        // Below we find the first index at which a vowel appears:

        const indOfA = letters.indexOf('a');
        const indOfE = letters.indexOf('e');
        const indOfI = letters.indexOf('i');
        const indOfO = letters.indexOf('o');
        const indOfU = letters.indexOf('u');

        // we find indexes of all vowels and concat them into one array:
        // (of course, some vowels won't be found, so we'll get -1)
        const indexes = [].concat(indOfA, indOfE, indOfI, indOfO, indOfU);
        console.log(`indexes of all vowels are ${indexes}`);

        // we have to eliminate or negative results (-1):
        const indexesOverZero = indexes.filter(i => {return i>0});
        console.log(`indexes greater then zero are ${indexesOverZero}`);

        // we use Math.min to find the lowest (first) index:
        const indexOfFirstVowel = Math.min(...indexesOverZero);
        console.log(`index of first vowel is ${indexOfFirstVowel}`);

        // Finally, we got our index! Now we can use 'indexOfFirstVowel' variable to manipulate our string:

        // we pass all letters placed BEFORE the first vowel to a variable. This will be needed later.
        const lettersBeforeVowel = string.substring(0, indexOfFirstVowel);
        console.log(`lettersBeforeVowel: ${lettersBeforeVowel}`);

        // and now we do the same with all letters placed AFTER the first vowel (including this vowel):
        const lettersAfterVowel = string.substring(indexOfFirstVowel);
        console.log(`lettersAfterVowel: ${lettersAfterVowel}`);

        // For the final result we simply merge new strings in a proper way:
        return lettersAfterVowel + lettersBeforeVowel + 'ay'

    } // end of second condition block

}

console.log( translatePigLatin("california") );
console.log( translatePigLatin("paragraphs") );
console.log( translatePigLatin("glove") );
console.log( translatePigLatin("algorithm") );
console.log( translatePigLatin("eight") );