const a = function(first) {
  console.log(first);
}
a();
// 이름 없는 함수를 저장해서 나만아는 용도로 쓰기 때문에 보안에 좋다.
// 아 function쓰기도 귀찮은데 function도 안적으면 안됨?

const b = first => console.log(first);
b();
// 화살표 함수가 그렇게 나타났다. 극단적으로 축약하면 중괄호도 줄일 수 있다.
// 매개변수가 1개라면 소괄호까지 지워도 된다.
// 이것은 극단적으로 줄인 형태이다.

const c = (first) => {
  console.log(first);
}
// 보통의(?) 화살표 함수.

// >=이것은 조건연산 => 이것이 arrow function작성법이다.
