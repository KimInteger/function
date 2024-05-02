document.body.style.margin = 0;
document.body.style.padding = 0;

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

const ul = document.createElement('ul');

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

const musicImg = []

for(let i =0; i < music.length; i++) {
  let divM = document.createElement('div');
  let divH1 = document.createElement('h1');
  let divS = divM.style;
  divS.width = '30vw';
  divS.height = '80vh';
  divS.border = '2px solid black';
  divS.fontSize = '3rem';
  divS.display = 'flex';
  divS.flexDirection = 'column';
  divS.columnGap = '5vh';
  divS.alignItems = 'center';
  divS.justifyContent = 'center';
  divS.backgroundColor = 'cadetblue';
  divS.zIndex = 2;
  divH1.textContent = music[i]

  root.appendChild(divM);
  divM.appendChild(divH1);
}

function clickL(e){
  e.target.style.width = '50vw';
  e.target.style.height = '90vh';
  e.target.style.position = 'absolute';
  e.target.style.zIndex = 4;
  e.target.style.backgroundColor = 'salmon';
  containS.display = 'flex';
  containS.backgroundColor = 'rgba(27, 27, 27, 0.5)';
  containS.zIndex = 3;
  btn.style.zIndex = 3;
}