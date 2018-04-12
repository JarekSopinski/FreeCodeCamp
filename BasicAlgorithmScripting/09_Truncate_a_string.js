/*
https://www.freecodecamp.org/challenges/truncate-a-string

INSTRUCTIONS FROM FCC:
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition
of the three dots does not add to the string length in determining the truncated string.

truncateString("A-tisket a-tasket A green and yellow basket", 11)
should return "A-tisket...".

truncateString("Peter Piper picked a peck of pickled peppers", 14)
should return "Peter Piper...".

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
should return "A-tisket a-tasket A green and yellow basket".


*/

const truncateString = (str, maxLength) => {

    const difference = str.length - maxLength;

    if (str.length > maxLength) {

        const shortString = str.slice(0, -difference) + '...';

        if (shortString.length > maxLength && shortString.length > 6) {
            const shorterString = shortString.slice(0, -6);
            return shorterString + '...';
        } else {
            return shortString;
        }

    } else { return str }

};

/*
EXPLANATION:

1) We subtract maxLength (2nd argument) from the length of first argument to get a difference.
2) If string isn't longer than maxLength, we simply return it.
3) Otherwise, we use .slice() to cut a difference and then we add three dots at the end.
4) If a newly created string is still longer then maxLength (remember about dots!), we use .slice() again.

DIFFICULTY: 3/10
 */

