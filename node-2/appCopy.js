const http = require('node:http');
// node.js로부터 http를 요청해온것
// http를 요청할꺼야

// console.log(http);
// console창으로 부르니까 뭔진 모르겠는데 일단 객체라는 것은 알았다.
// key가 들어있고 함수가 들어있고, 뭔진 모르지만 누군가 만들어놓은 객체이다.

/*
const server = http.createServer((req, res)=>{
  res.writeHead(200,{'Content-Type': 'application/json'});
  // 200은 statusCode같다 키 200에는 값이 OK였다.
  res.end(JSON.stringify({
    data: 'Hello World',
  }));
}

  // ? 요청(request)와 응답(response)를 어떻게 처리 할 것인가?
  // * 무슨 기능을 넣을것인가?
  // * 문서를 보낼까?

);
// http에 있는 createServer 함수를 사용해줘.

*/ 

/*
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'ContentType': 'text/html'});
  // 200은 http의 객체중 하나인 statusCode인가뭔가하는거의 키이다 그 값은 OK였다.
  // ContentType은 어떤 타입인지 정해주는 것 같다.
  res.end(`
  <html>
    <body>
      <h1>hello</h1>
    </body>
  </html>
  `
  );
  // end가... 출력부인가? 마지막에 이걸 실행해라?
  // 렌더링 해주는건가? 크로마니움대신에?
})
*/ 

const server = http.createServer();

server.on('request', (request, res)=>{
  res.writeHead(200,{'ContentType' : 'text/plain'});
  res.end(`
  <!DOCTYPE html>
  <html lang="ko">
    <body>
      <h1>hello</h1>
    </body>
  </html>
  `);
});
// 브라우저의 성능이 유연해서 태그를 정확하게 지정하면 html로 인식하고 
// html로 출력해버린다.


server.listen(8000);
// http에 있는 listen좀 해줘