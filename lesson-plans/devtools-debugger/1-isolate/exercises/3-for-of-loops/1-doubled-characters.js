'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}


let newText = '';
for( let char of text){
  newText = newText + char + '-'; //Add an hyphen after each character.
}
alert(newText);

let withHyphen ='';
let lastIndex = text.length -1;
for(let i=0; i<=text.length-1; i++){ //Add an hyphen only between the characters.
  if (i !== lastIndex) {
  withHyphen = withHyphen + text[i] + '-';
  }
  else {
    withHyphen = withHyphen + text[i] ;
  }
}
alert(withHyphen);
/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
