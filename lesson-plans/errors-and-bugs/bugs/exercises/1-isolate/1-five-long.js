'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1 bugs
    line: bugs at line no 19 and line 21 and 23
    why: instead of copmairing someone assign the value input = null and that's why its create and error to read the length of input
    trying: input == null then it will compare

*/

let input = prompt('enter something 5 characters long');

if (input == null) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
