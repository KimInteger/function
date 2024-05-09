function calcBooha(a, b, callback){
  callback(a, b);
}

const add = calcBooha(10, 20, function(a, b){
  let result = a + b;
  return result;
});

// function calcBooha(a, b, callback){
//   callback(a, b){
//     let result = a + b;
//     return result;
//   }
//   return result;
// }

// console.log(add);

calcBooha(10, 20, function(a, b){
  let result = a - b;
  console.log(result);
  return result;
})

const a = function(){
  console.log('hello');
}

console.log(a);``