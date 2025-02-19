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

while (true) {
  userIput = prompt('enter some text, the letters will be bouncified');

  if (userIput === null) {
    alert('no empty input, try again.');
  }
  if (userIput === '') {
    alert('there is no escape!');
  }
  if (userIput) {
    break;
  }
}

let result = '';
let caseSensitive = true;
let i = 0;
while (i < userIput.length) {
  let char = userIput[i];
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    if (caseSensitive) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
    caseSensitive = !caseSensitive;
  } else {
    result += char;
  }
  i++;
}
alert(result);
