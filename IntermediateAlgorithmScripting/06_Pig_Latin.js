/*
INSTRUCTIONS:
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
English consonants: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.
English vowels: a, e, i, o, u

The key seems to be finding the first index at which a first vowel appears
 */

function translatePigLatin(string) {

    if ( string.startsWith('a') || string.startsWith('e') || string.startsWith('i') || string.startsWith('o') || string.startsWith('u') ) {
        return string.concat('way')
        // condition block for an 'easy part' - when a word begins with vowel
    } else {


        const words = string.split('');

        const indOfA = words.indexOf('a');
        const indOfE = words.indexOf('e');
        const indOfI = words.indexOf('i');
        const indOfO = words.indexOf('o');
        const indOfU = words.indexOf('u');

        const indexes = [].concat(indOfA, indOfE, indOfI, indOfO, indOfU);
        console.log(`indexes of all vowels are ${indexes}`);

        const indexesOverZero = indexes.filter(i => {return i>0});
        console.log(`indexes greater then zero are ${indexesOverZero}`);

        const indexOfFirstVowel = Math.min(...indexesOverZero);
        console.log(`index of first vowel is ${indexOfFirstVowel}`);

    } // end of second condition block

}

console.log( translatePigLatin("california") );
console.log( translatePigLatin("paragraphs") );
console.log( translatePigLatin("glove") );
console.log( translatePigLatin("algorithm") );
console.log( translatePigLatin("eight") );

/*

function translatePigLatin(string) {

    if ( string.startsWith('a') || string.startsWith('e') || string.startsWith('i') || string.startsWith('o') || string.startsWith('u') ) {
        return string.concat('way')
    } else {
        return 'begins with consonant'
    }

}

 */

//words[0] !== 'a' || words[0] !== 'e' || words[0] !== 'i' || words[0] !== 'o' || words[0] !== 'u'