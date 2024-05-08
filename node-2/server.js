const http = require('http');

const fs = require('node:fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  fs.readFile('./a.html', 'utf8',(err, data)=>{
    if(err){
      console.log(err);
      return;
    }
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
  })

})

server.listen(port);

// 코드 설명