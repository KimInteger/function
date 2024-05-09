const lunchMenu = [
  ["와퍼","주니어와퍼","롱치킨버거","몬스터와퍼","트러플머쉬룸와퍼","스태커버거","콰트로치즈와퍼"],
  ["쉑쉑버거", "핫도그", "밀크쉐이크", "스모크쉑버거"],
  "알리오올리오",
  "등심돈까스",
  "순두부찌개",
  ["치킨마요","참치마요","무슨마요","도련님도시락","진달래"],
  ["짜장면","짬뽕","볶음밥","잡채밥","탕수육"],
  "쭈꾸미집",
  "도군함박",
  "마라탕",
  "곰탕",
  "쌀국수",
  "분식집",
  "칼국수",
  "샤브샤브",
  "콩나물국밥"
];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function lunchSelector(array){
  let select = getRandomInt(0,array.length)
  let result = '';
  // 랜덤을 결정하면 그것이 하나의 인덱스가 되어서, 배열 속 원소값을 선택해주는 실행문이 필요할 것이다.
  // 배열 원소값이 배열이라면 한번 더 실행.
  if(Array.isArray(array[select]) === true) {
    let select2 = getRandomInt(0,array[select].length);
    console.log(array[select][select2]);
    result = array[select][select2];
    // Array.isArray(array) === true라면,
    // 배열속에서 한번 더 랜덤을 결정해야함!
  } else {
    console.log(array[select]);
    result = array[select];
  }
  
  return result;
}

lunchSelector(lunchMenu);