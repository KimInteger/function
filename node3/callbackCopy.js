function a(a, b){
  return a + b;
}

// 그저 a와 b를 더해주는 것.
// 한계가 있다. 덧셈에 해당하는 것만 가능하다.

function b(a, b, callback){
  callback(a, b);
}
// 데이터를 전달한다 값일 전달한다고 해서 인자를 전달한다고 함.

b(4, 2, function(a, b){
  console.log(a * b);
})

b("7", 7, function(a, b){
  if(typeof(a,b)=== 'string'){
    console.log(a + b);
  } else if (typeof(a) === 'number' && typeof(b) === 'number'){
    console.log(a * b);
  } else {
    console.log("안해!");
  }
})

const test = b(1,1,function(a,b){
  return a + b;
})
// 이거 왜 test에 2라는 값이 할당되지 않았지?

console.log(typeof(test));

console.log(b(1,1,function(a,b){
  return a + b;
}))