' use stict'

/*  ===== Challenges =====

  - Copy the user's text 4 times
  - Number the copies like this:
    1. asdf
    2. asdf
    3. asdf
    4. asdf

*/
let userInput = null;
while(userInput == null){
userInput  = prompt('Enter the text'); // Take the user input
}
for(i=0; i<4; i++){
  console.log(i+1 +'.' +' '+ userInput) // Number the copies into 4 and diplay with numbers
}