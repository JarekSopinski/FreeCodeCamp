/*
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

A = 65
Z = 90

Jak rozwiązać problem liter, które są bliżej 65 niż 13 znaków??????
Rozwiązanie: jeżeli funkcja jest mniejsza od danej liczby (na połowie alfabetu) to odejmujemy,
w przeciwnym razie dodajemy????
(ROT13 'przełamuje' alfabet na dwie równe połowy, tak ja widać to na grafice na Wiki:
https://en.wikipedia.org/wiki/ROT13
Prawdopodobnie można to wykorzystać do rozwiązania tego problemu)

The charCodeAt() method returns an integer between 0 and 65535
representing the UTF-16 code unit at the given index
The following example returns 65, the Unicode value for A.
'ABC'.charCodeAt(0); // returns 65
'jArek'.charCodeAt(1); // 65

***************************************************************

The static String.fromCharCode() method returns a string created from
the specified sequence of UTF-16 code units.

String.fromCharCode(65, 66, 67) // ABC

Input	ABCDEFGHIJKLMNOPQRSTUVWXYZ
Output	NOPQRSTUVWXYZABCDEFGHIJKLM
 */