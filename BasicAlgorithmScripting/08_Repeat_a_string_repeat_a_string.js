/*
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num > 0) {
        return str.repeat(num);
    } else {
        return '';
    }
}

console.log(repeatStringNumTimes("abc", 3)); //output: abcabcabc

// Alternative solution with a for loop (AKA what would I do before ES6???)

function repeatString(str, num) {
    if (num > 0) {
        var repeatedStr = '';
        for (var i = 0; i < num; i++) {
            repeatedStr += str;
        }
        return repeatedStr;
    } else {
        return '';
    }
}

console.log(repeatString('Hey!', 4)); // output: Hey!Hey!Hey!Hey!