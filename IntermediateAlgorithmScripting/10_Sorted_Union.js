/*
INSTRUCTIONS FROM FCC:
Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order,
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
 */

/*
STEPS:
1) Use arguments object to merge all arrays into one;
2) Use .filter() on that array to filter out all repeated values.
 */

function uniteUnique(array) {

    // We put all arguments into a single array:
    const argsArray = Array.from(arguments);

    // They're still in sub arrays; we need to merge them into one:
    const mergedArray = [];

    argsArray.forEach(subArray => {
        mergedArray.push(...subArray)
    });

    // All numbers are merged within one array, meaning first part is solved.
    // Now we need to remove all repeated values.

    return mergedArray.filter((item, position) => {
        return mergedArray.indexOf(item) === position;
    });

    // Above, we use .filter() to iterate over the mergedArray.
    // For each element, we check if its first position is equal to current position.
    // This is false for repeated items, so they're removed.
}


console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) );
console.log( uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) );
console.log( uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) );
