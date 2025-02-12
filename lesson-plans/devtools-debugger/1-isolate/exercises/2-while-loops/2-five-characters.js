'use strict';

let input1 = null;
let input2 = null;
let input = 5;
while ((input1 === null) && (input.length !== 10)) {
  input1 = prompt('enter something with 5 characters:');
  input2 = prompt('enter something with 5 characters:');
  input = input1 + input2;
}

let message = 'thank you for "' + input1 + ' ' + input2 + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
