'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1 bug
    line:bug at line 21 due to && condition and  
    why:because of input.length is null so that why the program was  not running due to this bug
    trying:I have chage the condition and also use a break statemnt under if condition to exit the loop

*/

let message = '';

let input = null;
while (input === null || input.length === 0) {
  const input = prompt('enter something');
  
  message = input+'-> '+ 'you entered "' + input + '"'+'-> ';

  if(input.length!==0){
    break;
  }
}

alert(message);
