'use strict';

let inputFirst = prompt('enter your First name:');
let inputLast = prompt('enter your Last name:');

let greeting = '';
if (inputFirst === null) {
  greeting = 'hello first name anonymous.';
}else if (inputLast === null){
  greeting = 'heloo last name anonymous.';
}
 else {
  greeting = 'Hello ' + inputFirst + ' ' + inputLast + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
