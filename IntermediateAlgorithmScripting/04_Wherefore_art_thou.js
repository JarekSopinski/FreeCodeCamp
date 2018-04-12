/*
https://www.freecodecamp.org/challenges/wherefore-art-thou

INSTRUCTIONS:

Make a function that looks through an array of objects (first argument) and returns an array of all
objects that have matching property and value pairs (second argument). Each property and value pair
of the source object has to be present in the object from the collection if it is to be included in
the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio",
last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
then you must return the third object from the array (the first argument), because it contains the
property and its value, that was passed on as the second argument.

 */

const whatIsInAName = (collection, source) => {

    let sourceKeys = Object.keys(source);

    return collection.filter(collectionObject => {

        return sourceKeys.every(key => {

            return collectionObject.hasOwnProperty(key) && collectionObject[key] === source[key]

        })

    });
};


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// [ {a: 1, b: 2}, {a: 1, b: 2, c: 2} ]
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// [ {first: "Tybalt", last: "Capulet"} ]
/*
EXPLANATION:

1) Object.keys(source) returns an array of source's keys, which is passed to a sourceKeys variable;
2) Collection (first argument) is filtered using .filter method;
3) The filter method returns every (.every() method) object which has the source's keys and values; keys are checked using
.hasOwnProperty() method, and values are check by '===' comparison.

DIFFICULTY: 7.5/10
 */