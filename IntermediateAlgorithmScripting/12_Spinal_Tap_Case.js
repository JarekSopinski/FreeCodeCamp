/*
INSTRUCTIONS FROM FCC:
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
 */

function spinalCase(string) {

    // First we solve cases when words are separated by spaces or underscores.
    // In those cases, we simply replace spaces and underscores with dashes:

    let newString = string
        .replace(/ /g,"-")
        .replace(/_/g,"-");

    // Now comes the tricky part - what to do in cases like 'thisIsSpinalTap' ?

    // We have to use regex to put spaces before every capital letter
    // (trim is required to prevent whitespaces at the beginning of a sentence),
    // than once again we replace spaces with dashes:

    newString = newString
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/ /g,"-");

    // Now, there's a new problem - in some cases we got double dashes. We've got to remove them.
    newString = newString.replace(/--/g, '-');

    // Finally, we simply return sentence in lower case:
    return newString.toLowerCase();
}

console.log( spinalCase('This Is Spinal Tap') );
console.log( spinalCase('thisIsSpinalTap') );
console.log( spinalCase('The_Andy_Griffith_Show') );
console.log( spinalCase('Teletubbies say Eh-oh') );
console.log( spinalCase('AllThe-small Things') );

