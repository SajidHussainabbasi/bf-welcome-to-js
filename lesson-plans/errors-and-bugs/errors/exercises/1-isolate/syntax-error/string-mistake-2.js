

'use strict';

console.log('--- in execution phase ---');


/*
  environment:node

  name:syntax error 
  message:Unexpected string

  location:line 23

  life cycle:inn execution pase

  the mistake:this was the mistake const quotesInQuotes = 'remind yourself ''i can do this!'' at least once a day';

  the fix(es):const quotesInQuotes = 'remind yourself i can do this! at least once a day'; its working
*/

const quotesInQuotes = 'remind yourself i can do this! at least once a day';


