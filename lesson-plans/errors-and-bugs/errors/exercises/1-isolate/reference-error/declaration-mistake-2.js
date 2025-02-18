'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:reference eroro
  message:anonymous

  location:eror at lone 24

  life cycle: in execution phase

  the mistake:let isValidUserName declared on line 28 

  the fix(es):I cut and paste on line 19 and the error has been resolved
*/
let isValidUserName;
const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
