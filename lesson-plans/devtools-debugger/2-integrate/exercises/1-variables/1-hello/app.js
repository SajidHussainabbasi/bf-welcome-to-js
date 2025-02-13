

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/

 console.log('\n---Take input form use about their First Name and Last Name ---');

  // --- read user input first name and last name ---

  let firstname = prompt('Enter the First name');
  console.log(firstname);

 let lastname = prompt('Enter the First name');
 console.log(lastname);

  // --- create a message hello ---

  let greeting1 = ' Hello ';
  console.log(greeting1)

  let greeting2 =  firstname + ' ' + lastname +'!';

  // --- display the message with good bye with complete name  ---

  console.log('\ngood bye ', greeting2);
