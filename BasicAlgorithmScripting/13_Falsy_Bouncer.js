/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */

const bouncer = arr => {
    const trueValues = arr.filter(function(value) {return value});
    return trueValues
};

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]