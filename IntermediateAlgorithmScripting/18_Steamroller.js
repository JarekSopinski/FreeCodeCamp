/*
https://www.freecodecamp.org/challenges/steamroller

INSTRUCTIONS FROM FCC:

Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 */


const makeArrayFlat = initialArray => {

    let flatArray = [].concat(...initialArray);

    return flatArray.some(Array.isArray) ?
        makeArrayFlat(flatArray)
        :
        flatArray;

};

makeArrayFlat([[[[1]]],[2],[[3]],[4]]); // [1,2,3,4]

/*
EXPLANATION:

We use ternary operator to check if there are any sublevels (another arrays).
If there are, we use recursion with updated array as an argument.
Function calls itself back, until there are no sublevels left.

DIFFICULTY: 5.5/10
 */



// Below is my previous attempt which somehow works, but is way to complicated:

const flattenArray = nestedArray => {

    let newArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            newArray = newArray.concat(nestedArray[i]);
            flattenArray(newArray);
        } else {newArray = newArray.concat(nestedArray[i])}
    }
    return newArray

};

const steamrollArray = initialArray => {

    let flatArray;
    if (initialArray.some(item => Array.isArray(item))) {
        flatArray = flattenArray(initialArray);
        if (flatArray.some(item => Array.isArray(item))) {
            return steamrollArray(flatArray);
        } else {return flatArray}
    } else {return initialArray}

};


steamrollArray([[[[1]]],[2],[[3]],[4]]); // [1,2,3,4]