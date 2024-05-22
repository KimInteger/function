const http = require('http');

const fs = require('fs');

const path = require('path');

const qs = require('querystring');

const mimeType = {
  ".html":"text/html; charset=UTF-8",
  ".css":"text/css",
  ".js":"application/javascript",
  ".json":"application/json",
  ".ico":"img/x-icon"
};
// ! Content-Type을 지정할 객체

const fileUtills = {
  getFilePath : function(url){
    // ! 파일의 경로를 구할 함수
    let filePath = "";
    if(url === '/'){
      filePath = "./public/index.html";
    } else {
      filePath = "./public"+url;
    }
    return filePath;
  },

  getFileExtension : function(filePath){
    // ! 파일의 확장자를 구할 함수
    let ext = path.extname(filePath);
    // * last period(.)와 함께 그 뒤의 문자열을 함께 반환
    // ! 만약 index.html 이라면 .html을 반환
    return ext.toLowerCase();
    // * 대문자를 소문자로 바꾸는 method
  },

  getContentType : function(ext){
    // ! 파일의 Content-Type을 구할 함수.
    if(mimeType.hasOwnProperty(ext)){
      // * 만약 mimeType이 ext라는 프로퍼티를 가지고 있다면? 그게 true라면
      return mimeType[ext]
      // * 반환해줘 mimeType의 키의 이름이 ext인 것의 값을
    } else{
      return "text/plain";
      // * 없으면 그냥 text로 반환해줘
    }
  }
}

const server = http.createServer((req,res)=>{
  console.log(req.url);
  // ! url 확인
  
  let filePath = fileUtills.getFilePath(req.url);
<<<<<<< HEAD
  console.log(filePath);
=======
  // ! 파일 경로를 구한다 1번
>>>>>>> bc5bce0a0a84540d9cf16bc8fbd5c552c548516c

  let ext = fileUtills.getFileExtension(filePath);
  // ! 파일경로에서 파일의 확장자를 구분한다 2번

  let contentType = fileUtills.getContentType(ext);
  // ! 확장자에 맞는 Content-Type을 할당한다 3번.

  if(req.method === 'GET'){
    fs.readFile(filePath, (err, data)=>{
      if(err){
        if(err.code === "ENOENT"){
          res.writeHead(404, {"Content-Type":"text/html"});
          res.end("404 : NOT FOUND");
        } else {
          res.writeHead(500)
          res.end(`서버오류 : ${err.code}`);
        }
      } else {
        res.writeHead(200, {"Content-Type": contentType});
        res.end(data);
      }
    });
  }


  if(req.method === 'POST'){
    // ! req.method가 POST가 true라면 실행
    if(req.url === '/test'){
      // ! req.method가 POST이고 요청이온 req.url이 /test라면 실행
      let info = "";
      // ! 클라이언트가 보내줄 정보를 담을 변수를 초기화
      req.on('data', (data)=>{
        // ! 이 때 암호화된 정보가 data에 담긴다.
        info += data;
        // ! 클라이언트에게 받은 정보를 변수에 할당
        // ! 할당될 때는 복호화되어서 할당된다.
        // ! 이때 담기는 dataType은 string이다.
      });
      req.on('end', function(){
        // ! 더이상 받아올 데이터가 없을 때 실행.
        let setInfo = qs.parse(info);
        // ! parse매서드를 통해서 문자열 상태의 데이터를 객체로 변환하여 setInfo에 할당
        let name = setInfo.name;
        // * 변수 name에 setInfo의 키 name에 해당하는 값을 할당하고 초기화
        let content = setInfo.content;
        // * 변수 content에 setInfo의 키 content에 해당하는 값을 할당하고 초기화


        fs.writeFile(`./public/${name}.txt`, content, (err)=>{
          // ! 파일을 쓰는 매서드 writeFile을 사용
          // * 파일명은 변수 name, 파일 내용은 변수 content를 사용
          if(err){
            console.error(err);
            // ! 만약 에러가 나타난다면 에러를 출력
          }
        })

        res.writeHead(200, {"Content-Type": "text/html"});
        // ! 처리가 모두 끝나고 난 이후 클라이언트에게 보여줄 화면을 표기.
        res.end(`
        <!DOCTYPE html>
        <html lang="ko">
          <head>
            <meta charset="UTF-8">          
            <meta name="viewport" content="width=devic-width, initial-scale=1.0">
            <title>이게뭐람</title>
          </head>
          <body>
            <h1>크아아아악</h1>
            <h2>${name}</h2>
            <h2>${content}</h2>
          </body>
        </html>
        `);
      });
    }
  }
});

server.listen(8080, function(err){
  // * 포트를 연결해서 서버를 가동시킴.
  if(err){
    console.error("에러가 발생했습니다. : ", err);
  }
  console.log("서버가동중! 연결포트 8080");
  console.log(`http://localhost:8080`);
})