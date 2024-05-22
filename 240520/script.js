const root = document.getElementById('root');

const tile = document.getElementsByClassName('tile');

const player = document.getElementById('player');

window.addEventListener('keydown', (e)=>{
  console.log(e);
  if(e.code === 'ArrowDown'){
    tile[0].textContent = '';
    tile[1].innerHTML = '<div id="player"></div>';
  }
})