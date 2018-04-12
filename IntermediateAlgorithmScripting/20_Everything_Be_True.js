/*
https://www.freecodecamp.org/challenges/everything-be-true
INSTRUCTIONS FROM FCC:

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")
should return false

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")
should return true
 */

const truthCheck = (collection, pre) => {

    const trueCollection = collection.filter(item => {
        return item[pre]
    });

    return trueCollection.length === collection.length
};

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
// false
truthCheck([{"single": "yes"}], "single"); // true

/*
EXPLANATION:

1) We filter array leaving only items which pass the test; they're saved to a new array (trueCollection);
2) If new and old array have equal lengths, than every item has passed the test.

DIFFICULTY: 2.5/10
 */

// Alternative one-line version, using .every():

const easierTruthCheck = (collection, pre) => {return collection.every(item => item[pre])};

