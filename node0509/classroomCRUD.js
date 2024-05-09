const fs = require("fs");

const mainText = `읽어 봐라~ 못읽겠지? 깔깔깔`

fs.writeFile("example.txt", mainText, (err)=>{
  if(err) throw err;
})

function readFileAndLog(path) {
  console.log("함수 실행 시작");

  fs.readFile(path, "utf8", function (err, data) {
    if(err === true) {
      console.error("경로에 있는 데이터를 읽지 못해서 에러발생", err);
      return;
    }
    // if문 조건식이 아니라면, 즉 에러가 발생하지 않았다면 아래 코드 실행
    console.log("읽었다"); // 파일 읽기 성공
    console.log("읽은 데이터 :", data) // 읽은 데이터 출력
    // 다 읽어 바로 윗줄에서 출력했으므로, 괜히 메모리 빼버림

    // 데이터 처리 후 메모리에서 지우는 것을 모방
    data = null;
    // 존재하는 공간이지만 값은 없다는 데이터 타입 : null
    console.log("읽고난 후 메모리에서 지움");
    console.log(data);
  });
}

// 예제 파일 경로 
const filePath = "./example.txt";

// 함수 호출
readFileAndLog(filePath);