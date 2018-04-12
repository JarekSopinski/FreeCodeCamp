/*
https://www.freecodecamp.org/challenges/falsy-bouncer

INSTRUCTIONS FROM FCC:
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
 */

const bouncer = arr => {
    return arr.filter(value => {return value});
};

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]

/*
EXPLANATION:
We simply use .filter() method to keep only true values.

DIFFICULTY: 1/10
 */