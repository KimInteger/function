// const studentNamesArray = require('./names-data.js');
// // ./names-data.js라는게 없는데? 아 2개를 만들어야하나?
// // 아 저곳에서 불러오는 건가? 네임 데이터를?

// studentNamesArray.forEach((name) => {
//   console.log(name);
// });

// // forEach는 자바스크립트의 Array API에 해당하지.

const studentNamesArray = require('./names-data.js');
// # JavaScript 방식 - 선언형
studentNamesArray.forEach((name) => {
  console.log(name);
});
// 야. forEach함수있지 그거로 그냥 돌려



// # 일반 반복문 형식 -  절차형
for(let i = 0; i < studentNamesArray.length; i++){
  console.log(studentNamesArray[i]);
}
// 반복해줘! 배열을 0부터 순서대로.