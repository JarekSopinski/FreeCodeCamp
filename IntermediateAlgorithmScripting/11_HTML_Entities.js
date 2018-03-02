/*
INSTRUCTIONS FROM FCC:

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
 */

function convertHTML(string) {

    return string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

}

console.log( convertHTML("Dolce & Gabbana") );
console.log( convertHTML("Hamburgers < Pizza < Tacos") );
console.log( convertHTML("Sixty > twelve") );
console.log( convertHTML('Stuff in "quotation marks"') );
console.log( convertHTML("Shindler's List") );
console.log( convertHTML("<>") );