// node.js의 퍼포먼스를 알아보자

// const http = require('http'); global 생략 가능.
// node.js에서 요구하는 명령어 요구하다의 의미를 가진 require.
// HyperText `Transfer Protocol -> 문서를 교환하는 약속을 쓰겠다. <- 정도로 이해.
const http = require('http');

let mainDocument = `
<!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>nodeTest</title>
    </head>
    <body>
      <h1>hello</h1>
      <script>
        alert('hello');
      </script>
    </body>
  </html>`;
// 문자열일 뿐인 것을 html로 변환시켰다.
// 프론트 엔드는 할 수 없다. 
// 프론트 엔드는 기본적으로 쓰기 권한이 불가능하다. 왜? 인터넷이 무법지대가 되버리니까
// 그렇기 때문에 인증된 사람만이 사용할 수 있다.
  
  // 요청과 응답이라는 매개변수를 사용하는 함수 testServer를 선언했다.
  function testServer(request, response) {
    response.statusCode = 200;
    // 응답이 오면 statusCode라는 것에 200을 할당할게
    response.setHeader('Content-Type', 'text/html');
    // 응답이 오면 함수를 실행할게 Content-Type과 text/html을 매개변수로 가진 함수를 실행할게.
    response.write(mainDocument);
    // 뭐야 write도 함수가 있네, 응답이오면 써줘! mainDocument를 매개변수로가진 함수 write를
    response.end();
    // 응답이 종료되었다.
  }
  
    // http에 있는 함수좀 가져다 쓸게, http는 객체라는 것을 알 수 있다.
    // 왜? .(dot notation)으로 접근했으니까, 그리고 createServer는 함수이다 ()소괄호를 썼으니까.
    // http안에 있는 함수좀 호출할게.
const server = http.createServer(testServer);

// 서버에 길을 뚫어야 한다. listen이라는 함수를 사용
// 내 컴퓨터에 접속할 항구를 만들어줌
server.listen(3000, function(){
  console.log("서버 잘 되는구만!");
  console.log("http://localhost:3000");
});
