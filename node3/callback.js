function a(a,b){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments);
  return [a, b];
}

a("에이", "비");
