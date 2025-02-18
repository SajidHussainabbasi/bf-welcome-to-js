import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:node

  name:ReferenceError
  message:DisplayString is not defined

  location:line 46

  life cycle:inside execution phase

  the mistake:DisplayString is not defined

  the fix(es):displayString(d was in uper case) and also add else{
    advice = ' Never mind';
   }
*/

whenFormDataChanges('sleep-info', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let isTired = readBoolean('tired');

  let hasTime = readBoolean('free-time');

  // --- generate advice ---

  let advice = '';
  if (isTired && hasTime) {
    advice = 'Take a nap!';
  } else if (!isTired && hasTime) {
    advice = 'Study some flashcards.';
  } else if (isTired && !hasTime) {
    advice = 'Make some coffee.';
  } else if(!isTired && !hasTime){
    advice = 'Have a great day!';
  } else{
    advice = ' Never mind';
   }

  // --- display the advice ---

  displayString('advice-area', advice);
});
