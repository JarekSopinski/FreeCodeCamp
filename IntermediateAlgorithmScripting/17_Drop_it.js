/*
https://www.freecodecamp.org/challenges/drop-it

INSTRUCTIONS FROM FCC:
Drop the elements of an array (first argument), starting from the front, until
the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first
elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
 */

const dropElements = (initialArray, func) => {

    let firstTrueItem;

    for (let i = 0; i <= initialArray.length; i++) {

        if ( func(initialArray[i]) ) {
            firstTrueItem = initialArray[i];
            break
        }

    }

    const breakingPoint = initialArray.indexOf(firstTrueItem);

    return breakingPoint >= 0 ?
        initialArray.slice(breakingPoint)
        :
        []

};

dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // [1, 0, 1]
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); // [7, 4]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}); // []

/*
EXPLANATION:

1) We declare firstTrueItem variable which will store the first item to pass the test from 'func' argument;
2) We iterate over initialArray and after finding first item which passes test, we save it to a variable.
After this loop needs to be stopped (break);
3) We look for the index at which we'll perform a slice and we save it to a variable breakingPoint;
4) In case .indexOf() got negative result (-1), we need to return an empty array.
 */