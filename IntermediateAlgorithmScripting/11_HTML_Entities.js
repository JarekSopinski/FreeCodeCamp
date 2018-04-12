/*
https://www.freecodecamp.org/challenges/convert-html-entities

INSTRUCTIONS FROM FCC:
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(string) {

    return string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

}

convertHTML("Dolce & Gabbana"); //Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos"); //Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve"); //Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"'); //Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List"); //Shindler&​apos;s List
convertHTML("<>"); //&​lt;&​gt;

/*
EXPLANATION:
We simply use .replace() method to convert every possible character into its corresponding entity.

DIFFICULTY: 2/10
 */