function clickElement(clickTriggerElement, targetElement, someText) {
  function someEvent(targetElement, someText) {
    targetElement.textContent = someText;
  }
  clickTriggerElement.addEventListener('click',someEvent(targetElement, someText));
};
/*
* 일단 리턴이 없다.
? 함수 만든다. 이름은 clickElement 3개의 변수를 받아서 실행할 것이다. 이 함수의 실행문은?
? 클릭트리거 엘레멘트에 이벤트를 추가할 건데? 이벤트 타입은 클릭이고, 사용할 함수는 클릭 이벤트 안에 지역적으로 만들어진 함수.
! 지역함수는 어떻게 작동하는가?
! 함수를 선언할게 someEvent라는 이름을 가졌어. 매개변수로 2개를 받을꺼야.
! targetElement의 어튜리뷰트노드. 이름이 textContent인 녀석의 값으로 someText를 할당할꺼야.
*/ 
const elements = {
  triggerElement : {}, // 클릭이벤트를 가지게 됨.
  targetElement : {}, // 트리거를 클릭하는순간 순간 요놈한테 someEvent라는 함수가 실행되어서 textContent라는 어튜리뷰트노드가 생성되고 값으로써 someText가 할당된다.
  someText : "",
}

clickElement(elements.triggerElement, elements.targetElement, elements.someText);
// ! 요게 어떻게 진행이 될까?
// 함수를 실행한다 clickElement.
// 예상해봐 예상.
// ! 결국 이 함수의 결과는 TriggerElement에 이벤트를 삽입하는거다.
