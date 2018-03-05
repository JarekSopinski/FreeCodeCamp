/*
INSTRUCTIONS FROM FCC:

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")
should return false

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")
should return true
 */

function truthCheck(collection, pre) {

    // We filter array leaving only items which pass the test; they're saved to a new array:
    const trueCollection = collection.filter(item => {
        return item[pre]
    });

    // If new and old array have equal lengths, than every item has passed the test:
    return trueCollection.length === collection.length ? true : false
}

// Alternative one-line version, using .every():
function easierTruthCheck(collection, pre) {return collection.every(item => item[pre])}

console.log( truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") );
// false
console.log(truthCheck([{"single": "yes"}], "single")); // true

