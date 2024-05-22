function exampleCallback(a,b){
  return a + b;
}

function one(a,b,callback){
  return callback(a,b);
}

let numOne = one(4,3,exampleCallback);

console.log(numOne); // 7

function two(a,b,callback){
  return callback(a,b);
}

let numTwo = two(1,2,function(a, b){
  return a - b;
});

console.log(numTwo);  // -1

function three(a,b){
  return exampleCallback(a,b);
}

let numThree = three(4,5);
console.log(numThree); // 9

let test = one(1,2,three);
console.log(test); // 3