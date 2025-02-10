import goblinImage from '../img/goblin.png';

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

function getRandomPosition(currentIndex) {
  const holes = document.querySelectorAll('.hole');
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * holes.length);
  } while (randomIndex === currentIndex); 

  return holes[randomIndex];
}

function moveGnome() {
  const currentHole = img.parentElement;
  const holes = document.querySelectorAll('.hole');
  const currentIndex = Array.from(holes).indexOf(currentHole); 

  let nextHole = getRandomPosition(currentIndex); 

  nextHole.appendChild(img);
}


gameBoard.appendChild(img);
setInterval(moveGnome, 1000);