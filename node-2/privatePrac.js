const http = require('http');

const fs = require('fs');

const port = process.env.PORT || 3000;

const mainDoc = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>writeFile로만들기</title>
  </head>
  <body>
    <h1>Hellow writeFile!</h1>
  </body>
</html>
`;

fs.writeFile('b.html', mainDoc, 'utf-8', (err)=>{
  if(err) throw err;
})

const server = http.createServer((req,res)=>{
  fs.readFile('./b.html','utf-8',(err,data)=>{
    if(err){
      console.log(err);
      return;
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  })
})

server.listen(port);
