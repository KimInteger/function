const lunchMenus = [
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
// 신경 안씀 일단 알 것은 랜덤으로 숫자를 뽑아주는 함수.

// getRandomInt(0, array.length);
function lunchSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, array.length);
  if (Array.isArray(array[firstGetRandomIndex])) {
    const randomIndex = getRandomInt(0, array[firstGetRandomIndex].length);
    return array[firstGetRandomIndex][randomIndex];
    }
  return array[firstGetRandomIndex];
}
console.log(lunchSelector(lunchMenus));
