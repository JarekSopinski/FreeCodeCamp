/*
INSTRUCTIONS:
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/

// How to filter one array through another array?

let arr1 = ['a', 'b', 'c'];
let arr2 = ['b', 'c'];
let arr3 = arr1.filter(letter => !arr2.includes(letter));
console.log(arr3); // ['a']

// To solve the algorithm, I use the method above and arguments object
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

function destroyer(arr) {
    // all arguments are converted to an array using ES6 .from() method
    let args = Array.from(arguments);
    // than I remove the initial array using .slice()
    let destroyers = args.slice(1);
    // I get initialArray (it's on the first index in args array)
    let initalArray = args[0];
    // at this point, there are two arrays: initalArray (which will be filtered
    // and destroyers, which contains values used to filter initialArray
    // i.e. destroyers = [2, 3]
    // Now I filter initialArray through destroyers (using the same trick as above)
    let filteredArray = initalArray.filter(number => !destroyers.includes(number));
    return filteredArray
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]

// Important note: this solution won't work if I declare 'destroyer' as ES6 arrow function within const variable.
// I guess that error is caused by the fact that arguments objects work differently in arrow functions.