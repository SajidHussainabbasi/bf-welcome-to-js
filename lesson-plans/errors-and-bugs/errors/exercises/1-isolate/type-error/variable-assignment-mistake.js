

'use strict';

console.log('--- in execution phase ---');


/*
  environment:

  name:SyntaxError
  message:Invalid left-hand side in assignment

  location:line 25

  life cycle:in execution phase

  the mistake:true = isHappy;

  the fix(es):
*/

let isHappy = false;

 isHappy = true;


