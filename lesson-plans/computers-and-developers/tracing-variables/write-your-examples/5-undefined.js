'use strict';

/* Undefined

TODO: create a few variables(undefined):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/
//Declare a undefined variable myname
let myname;
// initialize the variable myname as undefined if we donot initialize by default it is undefined
myname = undefined
// Read the variable myname
console.log(myname);
 //reassigned the variable myname and try the if condition
myname = 'Sajid';
if (myname == undefined) {
  console.log('My name is undefined');
} else {
  console.log('My name is '+myname);
}