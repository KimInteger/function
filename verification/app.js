const http = require('http');
// ! http모듈을 불러오는 것 이것이 없으면 서버가 만들어질 수 없습니다!

const fs = require('fs');
// ! file system모듈을 불러오는 것입니다. 정적으로 작성된 html파일 혹은 css, javascript파일을 불러오는데 사용합니다.

const server = http.createServer(function(request,response){
  // * 서버 생성 request와 response를 배개변수로 사용합니다.
  function bringFile(url, filePath, contentType){
    // * 정적으로 받아올 파일을 비슷한 부분은 함수 처리하기 위해서 함수를 생성합니다.
    // ! 매개변수로는 요청이오는 url과 readFile을 위한 파일의 경로, 그리고 헤더에 작성할 contentType을 받아옵니다.
    if(request.url === url){
      // * 받아오는 url을 기준으로 나누기 위해서 넣은 조건문입니다.
      const file = fs.readFileSync(filePath, "utf8");
      // * 변수 file을 선언해서 서버에 적을 파일을 읽어와서 할당합니다.
      // * fs.readFileSync를 사용하였고 파일의 경로는 매개변수 처리하였습니다.
      // * 뒤의 "utf8"은 인코딩 방식을 의미합니다.
      response.statusCode = 200;
      // ? statusCode는 HTTP상태코드로서 특정 요청이 성공적인지 알려주는 값입니다.
      // ? 200은 OK라는 의미입니다. 즉, 성공
      response.setHeader("Content-Type", contentType);
      // * 헤더를 설정합니다. text/html, text/css, text/plain등 다양한 속성이 있기 때문에 그것을 매개변수 처리하였습니다.
      response.write(file);
      // * 아까 읽어온 파일을 할당받은 변수 file을 response.wrtie를 사용하여 서버에 작성합니다.
      response.end();
      // * 응답을 끝마칩니다.
    }
  }
  if(request.method === 'GET'){
    // ! 확인 결과 서버를 가져오는 것은 보통은 GET방식을 사용하기 때문에 GET인 경우를 상정하였습니다. 외에도 POST CONNECTION PUT DELETE등이 있으므로 지금 이 파일은 GET인 경우만 반응합니다.
    if(request.url === "/favicon.ico"){
      // ! /favicon.ico에서 계속해서 요청을 하는 것을 무시하기 위해서 작성하였습니다. 후에 favicon.ico를 따로 지정할 것이라면 지정하면 됩니다.
      return;
    }
    /*
     * 만든 함수를 사용하여 요청시 처리를 진행합니다. 
     */
    bringFile("/", "./public/index.html","text/html");
    bringFile("/style.css", "./public/style.css","text/css");
    bringFile("/script.js", "./public/script.js","text/javascript");
    bringFile("/index.html", "./public/index.html","text/html");
    bringFile("/entryGrade.html", "./public/entryGrade.html","text/html");
    bringFile("/highGrade.html", "./public/highGrade.html","text/html");
    bringFile("/realGrade.html", "./public/realGrade.html","text/html");
    bringFile("/masterGrade.html", "./public/masterGrade.html","text/html");
    bringFile("/css/EGstyle.css", "./public/css/EGstyle.css","text/css");
    bringFile("/css/HGstyle.css", "./public/css/HGstyle.css","text/css");
    bringFile("/css/RGstyle.css", "./public/css/RGstyle.css","text/css");
    bringFile("/css/MGstyle.css", "./public/css/MGstyle.css","text/css");

  }
  console.log(request.url);
  // ? 요청이 오는 경로를 파악하기 위해서 넣었습니다. 필요가 없다면 삭제하셔도 무방합니다.
})

server.listen(8080, console.log("서버 가동중! 연결된 포트 8080"));
// ! 서버에 포트를 연결합니다. localhost:8080으로 들어가실 수 있습니다.