'use strict';

/* Strings

TODO: create a few variables(strings):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

// create an empty string and assign empty string
let emptyString = '';

// log the variable emptyString
console.log(emptyString);

// a string with quotes in it
let myquoted = '"quoted string"';
//read the variable myquoted
console.log(myquoted);
// create a unquoted string
let unquoted = 'unquoted string';
// log the variable unquoted
console.log(unquoted);
// Conctenating the strings
//create another variable of string
let mystr = myquoted + emptyString + unquoted;
// read the concatenating the string variable
console.log(mystr);
// Concatenating in anothe way
let messagestr = `I am Concatenating the strings  ${myquoted}  ${emptyString} ${unquoted}!`;
// read the concatenating the string variable another way
console.log(messagestr);
// Concatenating the three strings by using concat() function
let result = myquoted.concat(" ", emptyString, " ", unquoted);
// read the result of concatenating the string by using function
console.log(result);


