//  문서 식별

const menu = document.getElementById('menu');

const toggleButton = document.getElementById('menu-toggle');

// 기초 설정 변수들
const menuWidth = 250;
const slideStep = 10;
const intervalTime = 16; // 60fps
const closedPosition = -(menuWidth);
const openPosition = 0;

// ★★ 상태 변수들 ★★
let isOpen = false;
let interval;

// 예제 함수
function slideMenu(open) {
  let currentPosition = parseInt(menu.style.left, 10);

  let targetPosition;

  let step;

  if(open){
    targetPosition = openPosition;
    step = slideStep;
  } else {
    targetPosition = closedPosition;
    step = -slideStep;
  }

  clearInterval(interval);

  interval = setInterval(()=>{
    if(open === true) {
      if(currentPosition >= targetPosition){    
        clearInterval(interval);
        menu.style.left = targetPosition + 'px';
        return;
      } 
    } else {
      if(currentPosition <= targetPosition){
        clearInterval(interval);
        menu.style.left = targetPosition + 'px';
        return;
      }
    }
    currentPosition +=step;

    menu.style.left = currentPosition + 'px';
  }, intervalTime);
}

toggleButton.addEventListener('click', ()=>{
  console.log(isOpen);
  if(isOpen === true){
    isOpen = false;
    slideMenu(false);
  } else {
    isOpen = true;
    slideMenu(true);
  }
});