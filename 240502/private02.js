document.body.style.margin = 0;
document.body.style.padding = 0;
const all = document.querySelectorAll('*');
console.log(all);

const root = document.getElementById('root');
let rootS = root.style;
rootS.display = 'flex';
rootS.flexDirection = 'row';
rootS.alignItems = 'center';
rootS.justifyContent = 'space-around';
rootS.width = '100vw';
rootS.height = '100vh';

document.body.appendChild(root);

const container = document.createElement('div');
let containS = container.style;
containS.position = 'absolute';
containS.display = 'none';
containS.alignItems = 'flex-end;'
containS.width = '100vw';
containS.height = '100vh';
containS.zIndex = 1;
containS.backgroundColor = 'rgba(255, 255, 255, 0)';

root.appendChild(container);


const btn = document.createElement('button');
// ! 이것은 root > div:nth-child(1)의 자식, 즉 container의 자식으로 넣어여겠다.
btn.style.position = 'absolute';
btn.style.cursor = 'pointer';
btn.style.top = '3vw';
btn.style.right = '3vw';
btn.style.zIndex = 0;
btn.textContent = 'X';

container.appendChild(btn);


const music = ["kpop", "pop", "jpop"];

const kpopList = ["fantastic baby", "스물셋", "Hype Boy"];

const popList = ["High hopes", "believer", "Bones"];

const jpopList = ["Shutter", "no Doubt", "Hadaka no Yuusya"];

const musicImg = [];
// 이거 h1을 이거로 대처하고 싶은데... 이미지로...


for(let i =0; i < music.length; i++) {
  let divM = document.createElement('div');
  let divH1 = document.createElement('h1');
  let divS = divM.style;
  divS.width = '30vw';
  divS.height = '80vh';
  divS.border = '2px solid black';
  divS.fontSize = '2rem';
  divS.display = 'flex';
  divS.flexDirection = 'column';
  divS.columnGap = '5vh';
  divS.alignItems = 'center';
  divS.justifyContent = 'center';
  divS.fontSize = '5rem';
  divS.backgroundColor = 'cadetblue';
  divS.zIndex = 2;
  divH1.textContent = music[i]
  divH1.style.display = 'flex';
  root.appendChild(divM);
  divM.appendChild(divH1);
}

function clickL(){
  this.style.width = '50vw';
  this.style.height = '90vh';
  this.style.position = 'absolute';
  this.style.zIndex = 4;
  this.style.backgroundColor = 'salmon';
  this.children[0].style.display = 'none';
  containS.display = 'flex';
  containS.backgroundColor = 'rgba(27, 27, 27, 0.5)';
  containS.zIndex = 3;
  btn.style.zIndex = 3;
}


function exitT(){
  for(let i = 1; i < 4; i++){
    root.children[i].style.width = '30vw';
    root.children[i].style.height = '80vh';
    root.children[i].style.backgroundColor = 'cadetblue';
    root.children[i].style.position = 'static';
    root.children[i].style.zIndex = 1;
    root.children[i].children[0].style.display = 'flex';
  }
  containS.display = 'none';
  containS.zIndex = 0;
  containS.backgroundColor = 'rgba(255, 255, 255, 0)';
  btn.style.zIndex = -1;
}

btn.addEventListener('click', exitT);

for(let i = 1; i < root.children.length; i++) {
  root.children[i].addEventListener('click',clickL);
}
