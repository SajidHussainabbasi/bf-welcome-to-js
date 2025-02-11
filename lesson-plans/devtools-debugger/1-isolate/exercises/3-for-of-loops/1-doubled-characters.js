'use strict';


/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
let text = null;
while (text === null) {
  text = prompt('Enter some text, each character will be doubled:');
}
let doubledWithHyphen = ''; // declare and initialize the vaiable varibale for Challenge 1: Add a hyphen after each character
let hyphenBetween = ''; // declare and initialize the variable for Challenge 2: Add a hyphen only between characters
for (let i = 0; i < text.length; i++) {
  let nextChar = text[i];
  // Challenge 1: Double each character and add a hyphen after it
  doubledWithHyphen += nextChar + nextChar + '-';
  // Challenge 2: Double each character and add a hyphen only between characters
  hyphenBetween += nextChar + nextChar;
  if (i < text.length - 1) {
    hyphenBetween += '-'; // Add hyphen only between characters
  }
}
alert('Doubled with hyphen after each character: ' + doubledWithHyphen);
alert('Doubled with hyphen between characters: ' + hyphenBetween);