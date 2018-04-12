/*
https://www.freecodecamp.org/challenges/chunky-monkey

INSTRUCTIONS FROM FCC:
Write a function that splits an array (first argument)
into groups the length of size (second argument) and returns them as a two-dimensional array.

(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
 */

const chunkArrayInGroups = (arr, size) => { //i.e. arr = ['a', 'b', 'c', 'd'], size = 2
    let newArray = [];
    let i = 0;
    while (i < arr.length) {
        newArray.push(arr.slice(i, i + size));
        i += size;
    }
    return newArray;
};

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [ ["a","b"], ["c","d"] ]

/*
EXPLANATION:

1) We declare a newArray - first-level array to which we will push sub-arrays;
2) We run a while loop through arr (2nd argument);
3) Every time the loop passes:
        A) arr is being pushed to newArray, but first it is sliced;
        the beginning is index number and the end is index number + size;
        i.e. on the first pass the arguments are (0, 2), so we get [a, b];
        on the second pass the arguments are (3, 5). Why not (1, 3)? Look below:
        B) size is added to i, so if size = 2, than on the second pass i = 3
4) We return new Array, which contains all sub-level arrays added in loop

DIFFICULTY: 5/10
 */

