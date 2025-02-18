import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:node

  name:SyntaxError
  message:Invalid left-hand side expression in prefix operation (at app.js:23:17)

  location:line 23

  life cycle:inside execution phase

  the mistake: console.log(--- form data changed ---);

  the fix(es): console.log('--- form data changed ---');
*/

whenFormDataChanges('input', () => {
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
