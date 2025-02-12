'use strict';

let firstname = prompt('Enter your first name:');
let lastname = prompt('Enter your last name:');

let greeting = '';
if ((firstname && lastname)  === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + firstname + ' ' + lastname +'!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
