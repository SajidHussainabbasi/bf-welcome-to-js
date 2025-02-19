'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/
let userIput = '';

while (userIput == null || userIput == '') {
  userIput = prompt('enter some text, the letters will be bouncified');

  if (userIput === null) {
    alert('no empty input, try again.');
  }
  if (userIput === '') {
    alert('there is no escape!');
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let isUpper = true;
let bouncified = '';

for (const char of userIput) {
  if (alphabet.indexOf(char) == -1) {
    bouncified += char;
    continue;
  }

  if (isUpper) {
    bouncified += char.toUpperCase();
  } else {
    bouncified += char.toLowerCase();
  }
  isUpper = !isUpper;
}
alert(bouncified);
