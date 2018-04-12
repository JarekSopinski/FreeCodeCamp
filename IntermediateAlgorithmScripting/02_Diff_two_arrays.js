/*
https://www.freecodecamp.org/challenges/diff-two-arrays

INSTRUCTIONS FROM FCC:
Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]
should return ["diorite", "pink wool"].

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
 */

function diffArray (arr1, arr2) {

    const firstDifference = arr1.filter(value => !arr2.includes(value));
    const secondDifference = arr2.filter(value => !arr1.includes(value));

    return firstDifference.concat(secondDifference);

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // returns 4
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// returns ["pink wool", "diorite"]
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
// returns an empty array

/*
EXPLANATION:
Solution is very similar to 'Seek and Destroy' from basic level, only this time we have to compare
two arrays against each other, than concat results from each comparison.

DIFFICULTY: 2.5/10
 */


