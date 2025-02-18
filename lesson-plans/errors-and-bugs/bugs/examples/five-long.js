'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1 : bugs 
    line:bugs in line 21 & line 23 
    why:wrong else if condition about <= and corrected as < then it become "too short"
    why:wrong else if condition about >= and corrected as > then it become "too long" 
    trying:

*/

let input = prompt('enter something 5 characters long');

if (input === null) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
