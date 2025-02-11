'use strict';

let input2;
let input1 = null;
while (input1 === null || input.length !== 10) { //Change the condition to 10 characters.
  input1 = prompt('enter something with 5 characters:');
input2=input1;
input1 = prompt('enter something with 5 characters:'); //Make the user write "everything" in 2 steps.
let message = 'thank you for "' + input2 + ' ' + input1 + '"!';
alert(message);
}


/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
