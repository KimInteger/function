const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = process.env.PORT || 3000;

const template = require('../../nodeJS/module/htmlTemplate');

function notFound(res){
  res.writeHead(404,{"Content-Type":"text/plain; charset=UTF-8"});
  res.end("페이지를 찾을 수 없습니다.");
}

fs.readdir('./writeFile','utf8',(err,file)=>{
  if(err){
    console.error('에러 코드 : ', err);
  }
  console.log(file);
  // fs.writeFile(path.join(__dirname,'test.txt'),file,(err)=>{
  //   if(err){
  //     throw err;
  //   }
  // });
});

// for(let i = 0 ; i < 6; i++){
//   let array = ['b','c','afq','ewg','gee','qwr12'];
//   fs.writeFile(`./writeFile/${array[i]}${i}}.html`,`${i}`,(err)=>{
//     if(err){
//       throw err;
//     }
//   })
// }


// const server = http.createServer((req,res)=>{
//   if(req.method === 'GET'){
//     if(req.url === '/'){
//       fs.readFile('./public/index.html', (err,data)=>{
//         if(err){
//           res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
//           res.end("서버 연결 오류", err);
//         }
//         res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
//         res.end(data);
//       });
//     } else {
//       notFound(res);
//     }
//   } else if (req.method === 'POST') {
//     if(req.url ==='/post'){
//       let body = '';
//       req.on('data', (chunk)=>{
//         body += chunk.toString();
//       });
//       req.on('end',()=>{
//         const parsedData = qs.parse(body);
//         console.log(parsedData);

//         fs.writeFile(path.join(__dirname,'writeFile',`${parsedData.title}.html`),template(parsedData.title,parsedData.content),(err)=>{
//           if(err){
//             console.log(err);
//           }
//         });
        
//         fs.readFile('./public/index.html', (err,data)=>{
//           if(err){
//             notConnect(res);
//           }
//           res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
//           res.end(data);
//         });

//       });
  
//     } else {
//       notFound(res);
//     }
//   } else {
//     notFound(res);
//   }
// });

// server.listen(PORT, (err)=>{
//   if(err){
//     console.error("에러 코드 : ", err);
//   }
//   console.log("서버가 열렸다도르");
//   console.log(`http://localhost:${PORT}`);
// })