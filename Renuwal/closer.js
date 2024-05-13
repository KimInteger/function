/*
  todo 클로저를 활용하여 각각의 count를 넣어서 체크해보자.
  todo p태그를 사용하여 몇 회 눌렀는지 체크하는 문장을 만들 것.
  ! 각각의 addEventListener는 ul태그에만 넣도록 해보자.
 */


const studentNames = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
]
console.log(studentNames);
// 배열 확인
console.log(studentNames.length); 
// 배열 legnth값 확인
// 확인결과 문제 없음.

const root = document.getElementById('root');
// 변수를 선언할게 문서안에 Id가 문자열로 'root'인 애를 찾아서 root에 할당해줘
const ul = document.createElement('ul');
//  변수를 선언할게 ul에 문서안에서 ul을 만들어서 할당해줘
ul.style.width = 'fit-content';



root.appendChild(ul);
// 루트에 ul에 할당된 변수를 자식으로 붙여줘

// 컴퓨터야 일해라! 먼저 지역변수를 하나 선언한다. i = 0;이야 이 제어문이 진행될동안만 기억하면 되. i가 객체배열인 studentNames의 length값보다 작다면,
// 내가 만든 실행문을 실행해줘, 실행문은 함수 listItem이야. 매개변수로는 아까 선언한 지역변수 i를 집어넣었어.
// 한번 실행했으면 i의 값을 1더해서 조건이 false가 될 때까지 반복해.
for(let i = 0; i < studentNames.length; i++) {
  let li = document.createElement('li')
  li.textContent = studentNames[i];
  li.style.color = 'black';
  ul.appendChild(li);
}


for(let i = 0; i < ul.children.length; i++){
  ul.children[i].addEventListener('click',()=>{
    if(ul.children[i].style.color === 'black'){
      ul.children[i].style.color = 'red';
    } else {
      ul.children[i].style.color = 'black';
    }
  });
}




const Counter = (function(){
  let num = 0;

  function Counter() {

  };

  Counter.prototype.increase = function(){
    console.log(num);
    return ++num;
  };

  Counter.prototype.decrease = function(){
    return --num;
  };

  return Counter;;
}());

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());

const text = new Counter();

console.log(text.increase());
console.log(text.increase());
console.log(text.increase());