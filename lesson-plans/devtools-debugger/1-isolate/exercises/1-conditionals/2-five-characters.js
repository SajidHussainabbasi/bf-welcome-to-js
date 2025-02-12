'use strict';
let input = 'apple'
input = prompt('enter something with 5 characters:') ||input;// keep default if input is empty

let message = '';
if (input === null) {
  message = ':(';// won't be shown since input is always assign a value
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}
if(message === ':(' || input === 'apple'){ //- Add one more conditional so that we never show ":(" and don't always show "thank you!" 
  message = ('Please enter some thing') // if user enter then the meggase display Enter some thing
}
alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
