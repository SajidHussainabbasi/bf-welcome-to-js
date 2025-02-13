'use strict'
import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---
  let searchThis = readString('text');
  let findThis = readString('query');
  let caseSensitive = readBoolean('sensitive');

  // --- do the search ---
  let doesExist = false;
  let position = -1;

  if (!caseSensitive) {  // NOT case-sensitive search
    let smallSearchThis = searchThis.toLowerCase();
    let smallFindThis = findThis.toLowerCase();
    position = smallSearchThis.indexOf(smallFindThis);
    doesExist = position !== -1;
  } else {  // Case-sensitive search
    position = searchThis.indexOf(findThis);
    doesExist = position !== -1;
  }

  // --- create the message ---
  let message = '';

  if (doesExist) {
    message = `"${findThis}" was found at position ${position}.`;
  } else {
    message = `"${findThis}" was not found in the text.`;
  }

  // --- display the search results ---
  displayString('search-result', message);
});

/*  ===== Challenges =====

  - display a more helpful message than "yes" or "no"
  - change the conditional so the `if` is NOT case sensitive and the `else` is

*/
