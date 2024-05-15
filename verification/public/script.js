const root = document.getElementById('root');

const show = document.getElementById('show');

const leftmove = document.getElementById('leftmove');
LMS = leftmove.style;
LMS.position = "absolute";
LMS.top = "50%";
LMS.left = "55%";
LMS.fontSize = "3rem";
LMS.backgroundColor = "transparent";
LMS.zIndex = "4";
LMS.border = "none";
LMS.cursor = "pointer";

const rightmove = document.getElementById('rightmove');
RMS = rightmove.style;
RMS.position = "absolute";
RMS.top = "50%";
RMS.right = "5%";
RMS.fontSize = "3rem";
RMS.backgroundColor = "transparent";
RMS.zIndex = "4";
RMS.border = "none";
RMS.cursor = "pointer";

let grade = ["eg","hg","rg","mg"];

function MoveR(){
  for(let i = 0; i < grade.length; i++){
    if (show.children[i].style.transform === "translate(0px)") {
      show.children[i].style.transform = "translate(-695px)";
    } else if (show.children[i].style.transform === "translate(-695px)") {
      show.children[i].style.transform = "translate(-1390px)";
    } else if (show.children[i].style.transform === "translate(-1390px)") {
      show.children[i].style.transform = "translate(-2085px)";
      RMS.color = 'white';
      LMS.color = 'white';
    } else {
      show.children[i].style.transform = "translate(0px)";
      RMS.color = 'black';
      LMS.color = 'black';
    }
  }
};

function MoveL(){
  for(let i = 0; i < grade.length; i++){
    if (show.children[i].style.transform === "translate(0px)") {
      show.children[i].style.transform = "translate(-2085px)";
      RMS.color = 'white';
      LMS.color = 'white';
    } else if (show.children[i].style.transform === "translate(-2085px)") {
      show.children[i].style.transform = "translate(-1390px)";
      RMS.color = 'black';
      LMS.color = 'black';
    } else if (show.children[i].style.transform === "translate(-1390px)") {
      show.children[i].style.transform = "translate(-695px)";
    } else {
      show.children[i].style.transform = "translate(0px)";
    }
  }
}

rightmove.addEventListener('click', MoveR);
leftmove.addEventListener('click', MoveL);