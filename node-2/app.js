const fs = require('fs');

const mainDocument = `
<!DOCTYPE html>
<html lang="ko">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>만들자 html</title>
  </head>
  <body>
    <h1>hellow nodeJS!</h1>
  </body>
</html>
`;

fs.appendFile('a.html', mainDocument,(err)=>{
  if(err) throw err;
})

