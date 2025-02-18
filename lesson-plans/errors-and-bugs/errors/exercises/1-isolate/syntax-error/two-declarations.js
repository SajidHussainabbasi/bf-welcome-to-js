'use strict';

console.log('--- in execution phase ---');

/*
  environment:node

  name:SyntaxError
  message:Identifier 'tree' has already been declared

  location:line 22

  life cycle:in execution phase

  the mistake:declare again with same name tree 

  the fix(es): rename with let tree1 = 'birch';its working
*/

let tree = 'oak';

let tree1 = 'birch';
