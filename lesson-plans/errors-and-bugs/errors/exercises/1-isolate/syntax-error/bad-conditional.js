

'use strict';

console.log('--- in execution phase ---');


/*
  environment:node

  name:SyntaxError
  message:Unexpected token '{'

  location:lie 27

  life cycle:in execution phase

  the mistake:there was only else 

  the fix(es):on line 27 I just add if after else and its working
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


