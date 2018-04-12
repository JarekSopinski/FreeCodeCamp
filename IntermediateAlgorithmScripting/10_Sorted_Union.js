/*
https://www.freecodecamp.org/challenges/sorted-union

INSTRUCTIONS FROM FCC:
Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 */

function uniteUnique(array) {

    const argsArray = Array.from(arguments);
    const mergedArray = [];

    argsArray.forEach(subArray => {
        mergedArray.push(...subArray)
    });

    return mergedArray.filter((item, position) => {
        return mergedArray.indexOf(item) === position;
    });

}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //[1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); //[1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //[1, 2, 3, 5, 4, 6, 7, 8]

/*
STEPS:
1) Use arguments object to merge all arrays into one;
2) Use .filter() on that array to filter out all repeated values.

EXPLANATION:
1) We put all arguments into a single array using Array.from(arguments). Because of that
the main function can't be an arrow function!
2) They're still in sub arrays; we need to merge them into one (mergedArray);
3) After running forEach, all numbers are merged within one array, meaning first part is solved.
Now we need to remove all repeated values.
4) We use .filter() to iterate over the mergedArray.
or each element, we check if its first position is equal to current position.
This is false for repeated items, so they're removed.

DIFFICULTY: 4/10
 */
