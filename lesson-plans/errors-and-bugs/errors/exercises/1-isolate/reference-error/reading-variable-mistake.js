'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:reference error
  message:anonymous

  location:line 20

  life cycle:in execution phase

  the mistake:line 20 console.log(tomatoes); reading variable which is declared after

  the fix(es): I have cut(console.log(tomatoes);) and paste on line 23 to read the varibale
*/



let tomatoes = 'fresh';
console.log(tomatoes);
