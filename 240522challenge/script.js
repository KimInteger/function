//  문서 식별

const menu = document.getElementById('menu');
// * 문서에서 id가 menu인 요소를 찾아서 변수에 할당

const toggleButton = document.getElementById('menu-toggle');
// * 문서에서 id가 menu-toggle인 요소를 찾아서 변수에 할당

// 기초 설정 변수들
const menuWidth = 250;
// * 열고 닫고를 지정할 수치

const slideStep = 10;
// * 

const intervalTime = 16; // 60fps
// * 반복할 시간을 정한 것, 16이면 60fps 7이면 144fps

const closedPosition = -(menuWidth);
// * 닫혀있을 떄의 width

const openPosition = 0;
// * 열려있을 때의 width

// ★★ 상태 변수들 ★★
let isOpen = false;
// ! 조건문으로 함수를 핸들링하기 위한 변수!
// ! boolean값으로 할당한다.

let interval;
// ! 일단 변수를 선언해 놓는다.
// ? 이름으로 추측하였을 때 interval을 걸고 닫고를 지정할 변수인 듯 하다.


// 예제 함수
function slideMenu(open) {
  // ! 함수를 선언 매개변수로는 open이라는 값을 넣었다.
  // ? 이것을 핸들링할 것이기 때문에 아마 isOpen이 들어갈 것이다.
  // ? 즉 true,false값이 들어간다고 볼 수 있다.

  let currentPosition = parseInt(menu.style.left, 10);
  // ! parseInt(string(문자열), radix(진수))
  // ? 문자열에 있는 number만 집어서 10진수의 방법으로 보내줘
  // * 만약 "1241"이라면 1241을 반환
  // * 즉 currentPosition에는 num타입의 값이 할당된다.

  let targetPosition;
  // * 선언만

  let step;
  // * 선언만.

  if(open){
    targetPosition = openPosition;
    // ! isOpen이 true값일 때 오픈 포지션을 할당 즉 0이 할당된다.
    step = slideStep;
    // ! 10이 할당된다.
  } else {
    targetPosition = closedPosition;
    // ! isOpen이 false값일 때 클로즈포지션을 할당 즉 -250이 할당된다.
    step = -slideStep;
    // ! -10이 할당된다.
  }

  /*
  * 쉽게 말하면 열고 닫고를 하는 것같다 이것을 어떻게 할당하느냐에 따라.
  */

  clearInterval(interval);
  // ! 혹 실행되어 있다면 interval을 멈춘다.

  interval = setInterval(()=>{
    // ! interval을 setInterval을 할당,
    // ! 여기서 조건문 if는 setInterval을 멈추기위한 지점이다.
    if(open === true) {
      if(currentPosition >= targetPosition){    
        // ? 만약 left의 값이 targetPosition보다 높거나 같을 때,
        clearInterval(interval);
        // ! interval을 멈춘다.
        menu.style.left = targetPosition + 'px';
        // ! menu.style.left를 targetPosition과 같게 만든다.
        // ! 즉 지정된 값까지 이동하고 그 값을 할당 하는 것.
        return;
      } 
    } else {
      if(currentPosition <= targetPosition){
        // ? 만약 left의 값이 targetPosition보다 작거나 같을 때,
        clearInterval(interval);
        // ! interval을 멈춘다.
        menu.style.left = targetPosition + 'px';
        // ! menu.style.left를 targetPosition과 같게 만든다.
        return;
      }
    }

    // ! 이게 실제 실행문이다. currentPosition에 step이 더해진다 
    // ! 즉 10의 간격으로 움직일 것이다. 단 여기선 할당.
    currentPosition +=step;

    menu.style.left = currentPosition + 'px';
    // ! 여기서 px로 붙으면서 옆으로 움직일 것이다. 최대 어디까지?
    // ! -250 혹은 0 까지. 10px의 간격으로 움직인다.

  }, intervalTime);
  // ! 60fps의 속도로 움직일 것이다.
}

toggleButton.addEventListener('click', ()=>{
  // ! 이벤트를 핸들링할 버튼에 addEventListener
  console.log(isOpen);
  // ! isOpen의 현재 값을 확인
  if(isOpen === true){
    // ! 열려있는 것이 닫힐 것이다.
    isOpen = false;
    // ! isOpen을 false로 변경
    slideMenu(false);
    // ! false가 되었기 때문에 다시 닫힐 것이다.
  } else {
    // ! 여기서 부터 실행
    isOpen = true;
    // ! isOpen을 true로 변경 
    // ! 즉, 한번 더 누르면 반대로 간다.
    slideMenu(true);
    // ! true의 값을 실행.
    // ! 요소가 오른쪽으로 이동할 것이다.
  }
});