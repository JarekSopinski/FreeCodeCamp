/*
INSTRUCTIONS:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as
a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.

***********************************************************************

NOTE: I wasn't satisfied with the first solution (see Ceasars_Cipher_1st_solution.js file)
because it forced me to write a very long switch statement.
Instead of relying on switches, this solution is based on letter's positions in Unicode.
Thus, the code is much shorter, no need for almost 100 lines of switch statement.

***********************************************************************

HOW EXACTLY DOES ROT13 WORKS?

Input	ABCDEFGHIJKLMNOPQRSTUVWXYZ
Output	NOPQRSTUVWXYZABCDEFGHIJKLM

See also: https://en.wikipedia.org/wiki/ROT13

***********************************************************************

ENCOUNTERED PROBLEMS AND HOW I SOLVED THEM:

1) Przerobić stringa na tablicę;
2) Puścić pętlę przez tę tablicę
--> Początek pętli
3) W pętli przerobić każdy element tablicy na liczbę (charCodeAt)
4) Potem odjąć od tej liczby 13
5) Przerobić znowu na stringa (fromCharCode)
6) Zlepić concatem
--> Wyjście z pętli
7) Tablica wyników ze wszystkich iteracji jest konwertowana do stringa
--> Jak rozwiązać problem znaków innych niż alfabetyczne?
(Prawdopodobnie trzeba zacząć wykonywanie pętli od warunku logicznego z wyrażeniem regularnym;
jeżeli jest znak inny niż alfabetyczny, to pomija odejmowanie 13, w przeciwnym razie działa
dalej)

I break alphabet into to equal parts:
(A, index = 65) to (M, index = 77)
(N, index = 78) to (Z, index = 90)

Jak rozwiązać problem liter, które są bliżej 65 niż 13 znaków??????
Rozwiązanie: jeżeli funkcja jest mniejsza od danej liczby (na połowie alfabetu) to odejmujemy,
w przeciwnym razie dodajemy????
(ROT13 'przełamuje' alfabet na dwie równe połowy, tak ja widać to na grafice na Wiki:
https://en.wikipedia.org/wiki/ROT13
Prawdopodobnie można to wykorzystać do rozwiązania tego problemu)

**********************************************************************

METHODS USED IN THIS SOLUTION:

1) .charCodeAt()
The charCodeAt() method returns an integer between 0 and 65535
representing the UTF-16 code unit at the given index
The following example returns 65, the Unicode value for A.

'ABC'.charCodeAt(0); // returns 65
'jArek'.charCodeAt(1); // 65

2) .fromCharCode()
The static String.fromCharCode() method returns a string created from
the specified sequence of UTF-16 code units.

String.fromCharCode(65, 66, 67) // ABC

3) .match()
The match() method searches a string for a match against a regular expression,
and returns the matches, as an Array object.
This works similar to .includes(), but .includes() doesn't work with regex.

********************************************************************

FIRST STEP
Below I write a function (just a prototype at this point - thus its name is ended with '_testing')
which first checks (using .match() and regex) if the value of 'letter' is actually a letter, and
not some non-alphabetical sign.

If it's not a letter, than the function simply returns the same value.

Than the function converts a letter into a number representing its position in Unicode (i.e. A = 65).

I pass a result to a variable 'unicodeIndex'.

Than I run a second test, to check if a letter represented by unicodeIndex belongs to the first part
or the second part of alphabet.
 */

function decodeLetterInROT13_testing(letter) {
    if (letter.match(/[\W_]/g)) {
        return letter
    } else {
        let unicodeIndex = letter.charCodeAt(0);
        if (unicodeIndex <= 77) {
            return 'first part of alphabet'
        } else {
            return 'second part of alphabet'
        }
    }
}

console.log(decodeLetterInROT13_testing('A')); // first part of alphabet
console.log(decodeLetterInROT13_testing('N')); // second part of alphabet
console.log(decodeLetterInROT13_testing('!')); // non-alphabetical sign, so the result is simply '!'

