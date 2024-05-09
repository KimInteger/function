const studentNamesArray = require('./names-data.js');

studentNamesArray.forEach((name) => {
  console.log(name);
});
// forEach안에는 반복문이 들어있다.

function na(array) {
  for(let i = 0; i < array.length; i++ ){
    let name = array[i]
    console.log(name);
  }
}
// forEach를 함수로 만든다면? 이렇게 나올 것이다.