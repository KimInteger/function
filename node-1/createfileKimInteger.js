const fs = require('fs');

fs.appendFile('node.js','js', (err)=>{
  // fs가 뭔지 알아야겠다.
  // fs에 첫번째 매개변수의 파일을 만들게
  // 만들어진 파일에 두번째 매개변수의 메세지를 넣을꺼야
  // 만약 에러가 나오면 에러를 갖다 버려?
  if(err) throw err;
})