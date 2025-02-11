'use strict';

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('Enter something to reverse:');
}
// Reverse the string
let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}
// Reverse it again to get the original string back
let original = '';
for (let nextChar of backwards) {
  original = nextChar + original;
}
let transformation = toReverse + ' -> ' + backwards + ' -> ' + original;
alert(transformation);