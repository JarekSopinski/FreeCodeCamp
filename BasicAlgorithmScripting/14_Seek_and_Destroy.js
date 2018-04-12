/*
https://www.freecodecamp.org/challenges/seek-and-destroy

INSTRUCTIONS FROM FCC:
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/

function destroyer(arr) {

    let args = Array.from(arguments);
    let destroyers = args.slice(1);
    let initialArray = args[0];
    return initialArray.filter(number => !destroyers.includes(number));

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]

/*
EXPLANATION:

1) All arguments are converted to an array using ES6 .from() method;
2) Then we remove the initial array using .slice();
3) We declare initialArray variable (it's value is the first index in args array);
4) At this point, there are two arrays: initalArray (which will be filtered)
and destroyers, which contains values used to filter initialArray, i.e. destroyers = [2, 3]
5) Finally, we filter initialArray through destroyers.

Important note: this solution won't work if we declare 'destroyer' as ES6 arrow function within const variable.
This is caused by the fact that arguments object is not available in arrow function.

DIFFICULTY: 3.5/10
 */