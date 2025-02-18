'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1 bug 
    line:line 25 
    why:beacsue of wrong logic and thatb was for the reversing the string or input string
    trying: I have made changes to excited +=character+'!'; then I have been really exited to solve the problem

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited +=character+'!';
}

alert(excited);
