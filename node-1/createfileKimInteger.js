const fs = require('fs');

fs.appendFile('newtext.txt', 'Hello KimInteger', function(err){
  if(err) throw err
  else console.log('saved!');
})
