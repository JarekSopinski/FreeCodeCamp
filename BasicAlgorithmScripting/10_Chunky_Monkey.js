/*
INSTRUCTIONS:
Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns them as a two-dimensional array.

(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
 */

function chunkArrayInGroups(arr, size) { //i.e. arr = ['a', 'b', 'c', 'd'], size = 2
    let newArray = []; // first-level array to which we push sub-arrays
    let i = 0; // index in while loop
    while (i < arr.length) { // while loop goes through arr (['a', 'b', 'c', 'd'])
        newArray.push(arr.slice(i, i + size));
        /*
        every time the loop passes:
        1) arr is being pushed to newArray, but first it is sliced;
        the beginning is index number and the end is index number + size;
        i.e. on the first pass the arguments are (0, 2), so we get [a, b];
        on the second pass the arguments are (3, 5). Why not (1, 3)? Look below:
        2) size is added to i, so if size = 2, than on the second pass i = 3
        */
        i += size;
    } //end of loop
    return newArray; // the result is first-level array, which contains all sub-level arrays added in loop
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));