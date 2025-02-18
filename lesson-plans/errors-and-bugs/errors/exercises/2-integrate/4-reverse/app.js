import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:node

  name:TypeError
  message:screaming is not iterable and also anonymous

  location:line 24 and 34

  life cycle:inside executing phase

  the mistake:screaming was there in for of loop: for (let character of screaming)

  the fix(es):for (let character of text)
*/

whenFormDataChanges('reversify', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = reversed.toUpperCase();
  } else {
    finalText = reversed.toLowerCase();
  }

  // --- display the final text ---

  displayString('out', finalText);
});
