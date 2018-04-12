/*
https://www.freecodecamp.org/challenges/spinal-tap-case

INSTRUCTIONS FROM FCC:
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

const spinalCase = string => {

    let newString = string
        .replace(/ /g,"-")
        .replace(/_/g,"-");

    newString = newString
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/ /g,"-");

    newString = newString.replace(/--/g, '-');
    return newString.toLowerCase();
};

spinalCase('This Is Spinal Tap'); //"this-is-spinal-tap"
spinalCase('thisIsSpinalTap'); //"this-is-spinal-tap"
spinalCase('The_Andy_Griffith_Show'); //"the-andy-griffith-show"
spinalCase('Teletubbies say Eh-oh'); //"teletubbies-say-eh-oh"
spinalCase('AllThe-small Things'); //"all-the-small-things"

/*
EXPLANATION:

1) First we solve cases when words are separated by spaces or underscores.
In those cases, we simply replace spaces and underscores with dashes;

2) Now comes the tricky part - what to do in cases like 'thisIsSpinalTap' ?
We have to use regex to put spaces before every capital letter
(trim is required to prevent whitespaces at the beginning of a sentence),
than once again we replace spaces with dashes (14-17);

3) Now, there's a new problem - in some cases we got double dashes. We've got to remove them (19);

4) Finally, we simply return sentence in lower case.

DIFFICULTY: 4/10
 */



