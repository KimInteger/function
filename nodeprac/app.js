const http = require('http');

const fs = require('fs');

const path = require('path');

const mimeType = {
  ".html":"text/html; charset=UTF-8",
  ".css":"text/css",
  ".js":"application/javascript",
  ".json":"application/json",
  ".ico":"img/x-icon"
};

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
    if(mimeType.hasOwnProperty(ext)){
      return mimeType[ext]
    } else{
      return "text/plain";
    }
  }
}

const server = http.createServer((req,res)=>{
  console.log(req.url);
  // ! url 확인
  
  let filePath = fileUtills.getFilePath(req.url);

  let ext = fileUtills.getFileExtension(filePath);

  let contentType = fileUtills.getContentType(ext);

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
});

server.listen(8080, function(err){
  if(err){
    console.error("에러가 발생했습니다. : ", err);
  }
  console.log("서버가동중! 연결포트 8080");
  console.log(`http://localhost:8080`);
})