/*
https://www.freecodecamp.org/challenges/finders-keepers

INSTRUCTIONS FROM FCC:
Create a function that looks through an array (first argument) and returns the
first element in the array that passes a truth test (second argument).

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
 */

function findElement(arr, func) {

    const newArr = arr.filter(func);
    return newArr[0]

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }); // 2
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // 8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // undefined

/*
EXPLANATION:

Very easy, it's actually quite strange that it's on intermediate level.
All we have to do is use filter on first argument with second argument as filter's argument.
Then we return first item - zeroth index.

DIFFICULTY: 1/10
 */