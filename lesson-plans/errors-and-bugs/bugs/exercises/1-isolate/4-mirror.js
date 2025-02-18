'use strict';

/*
  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'


  experiment 1
    line:
    why:
    trying:

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}
let mirrored = ' | ';
let arow = " -> ";
  for (let char of text) {
    mirrored = char + mirrored + char;
  }

//alert(mirrored);
console.log(text,arow, mirrored);
