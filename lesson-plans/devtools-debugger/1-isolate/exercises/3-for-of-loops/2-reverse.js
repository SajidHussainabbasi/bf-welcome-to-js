'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;
let backIn= backwards + ' -> ' + toReverse;
alert(transformation);
alert(backIn);


/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
