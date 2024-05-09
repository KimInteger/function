function a(a,b) {
  return a+b;
}
function b(a,b, callback) {
  callback(a,b); //인자를 전달한다
  //인수인계한다.
}
//호출할때 함수를 정의해준다.
//addevwntlisten가 대표적 callback함수
// b(1,2,function(a,b) {
//   console.log(a + b);
// })
b(2, 10, function(a,b){
  if(typeof(a) === 'number' && typeof(b) === 'number'){
    console.log(a*b);
  } else if (typeof(a,b) === 'string') {
    console.log(a+b);
  } else {
    console.log(a**b);
  }
});

console.log(typeof(1)==='number');