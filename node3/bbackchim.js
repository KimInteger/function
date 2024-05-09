// function work(string){
//   if(typeof(string) === 'string'){
//     console.log(string);
//   } else {
//     console.error('이건 내가 원하는게 아니야!!!');
//   }
// }

function work(string){
  try{
    if(typeof(string) === "string"){
      console.log(string);
    }
  } catch(error){
    console.error(error, "내가 원하는 것은 이게 아니야!");
  }
}

work("안녕");
work(true);
work(111);
work({name : "김인티저"});