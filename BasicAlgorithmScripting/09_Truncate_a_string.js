/*
INSTRUCTIONS:
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition
of the three dots does not add to the string length in determining the truncated string.


///////////FIRST STEP - solution which ignores problem caused by '...' additional length:

function truncateString(str, num) {
    var difference = str.length - num;
    if (str.length > num) {
        var shortString = str.slice(0, -difference);
        return shortString + '...';
    } else {
        return str;
    }
}

*/

function truncateString(str, num) {
    var difference = str.length - num;
    if (str.length > num) {
        var shortString = str.slice(0, -difference) + '...';
        if (shortString.length > num && shortString.length > 6) {
            var shorterString = shortString.slice(0, -6);
            return shorterString + '...';
        } else {
            return shortString;
        }
    } else {
        return str;
    }

}

