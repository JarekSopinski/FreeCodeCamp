/*
INSTRUCTIONS FROM FCC:

Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 */


function flattenArray(nestedArray) {
    // This function will be used as a callback in a main function; it removes one level of a nested array

    let newArray = [];

        for (let i = 0; i < nestedArray.length; i++) {

            if (Array.isArray(nestedArray[i])) {

                newArray = newArray.concat(nestedArray[i]);
                flattenArray(newArray);

            } else {newArray = newArray.concat(nestedArray[i])}

        }

        return newArray

}

function steamrollArray(initialArray) {

    let flatArray;

    if (initialArray.some(item => Array.isArray(item))) {

        // We use previously created callback to remove one level:
        flatArray = flattenArray(initialArray);

        if (flatArray.some(item => Array.isArray(item))) {
            // If there are still nested arrays, we use recursion on an updated array to repeat the process:
            return steamrollArray(flatArray);

        } else {return flatArray}

    } else {return initialArray}

}


console.log( steamrollArray([[[[1]]],[2],[[3]],[4]]) ); // [1,2,3,4]

// NOTE: I do realize that this solution is overcomplicated. Below is much better one, based on solution from FCC forums:

function makeArrayFlat(initialArray) {

    let flatArray = [].concat(...initialArray);

    return flatArray.some(Array.isArray) ?
        makeArrayFlat(flatArray)
        :
        flatArray;

}

console.log( makeArrayFlat([[[[1]]],[2],[[3]],[4]]) ); // [1,2,3,4]