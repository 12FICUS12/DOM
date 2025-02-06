import goblinImage from '../img/goblin.png'

const gameBoard = document.createElement('div');
gameBoard.className = 'game-board';
document.body.appendChild(gameBoard);

for (let i = 0; i < 16; i++) {
  const hole = document.createElement('div');
  hole.className = 'hole';
  gameBoard.appendChild(hole);
}

const img = document.createElement('img');
img.src = goblinImage;
img.className = 'goblin';

function getRandomPosition() {
  const holes = document.querySelectorAll('.hole');
  const randomIndex = Math.floor(Math.random() * holes.length);
  return holes[randomIndex];
}

function moveGnome() {
  const currentHole = img.parentElement;
  let nextHole;
  
  do {
    nextHole = getRandomPosition();
  } while (nextHole === currentHole);

  nextHole.appendChild(img);
}

gameBoard.appendChild(img);
setInterval(moveGnome, 1000);