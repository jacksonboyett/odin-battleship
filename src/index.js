import './style.css';
import print from './print.js';
import Ship from './Ship.js'
import createDom from './createDom.js';
import Gameboard from './Gameboard.js';
import Player from './Player.js';
import placeShips from './placeShips.js';

console.log('Coral is so beautiful.')
print();

// ******************************************************
createDom();
let player1 = Player('jackson');
let player2 = Player('computer');

export let board1 = Gameboard();
export let board2 = Gameboard();

export let ship10 = Ship('ship10', 1); // Destroyer
export let ship11 = Ship('ship11', 2); // Submarine
export let ship12 = Ship('ship12', 3); // Cruiser
export let ship13 = Ship('ship13', 4); // Battleship
export let ship14 = Ship('ship14', 5); // Carrier
let ship20 = Ship('ship20', 1);
let ship21 = Ship('ship21', 2);
let ship22 = Ship('ship22', 3);
let ship23 = Ship('ship23', 4);
let ship24 = Ship('ship24', 5);

// board1.placeShip(ship10, [0,0]);
// board1.placeShip(ship11, [2,1]);
// board1.placeShip(ship12, [5,2]);
// board1.placeShip(ship13, [6,4]);
// board1.placeShip(ship14, [3,8]);
board2.placeShip(ship20, [5,1]);
board2.placeShip(ship21, [3,3]);
board2.placeShip(ship22, [2,5]);
board2.placeShip(ship23, [6,6]);
board2.placeShip(ship24, [2,8]);

let startButton = document.querySelector('.start');
startButton.addEventListener('click', placeShips)


// To place ship:
// call board1.placeShip method on element
// add hover for ship length right elements



// Show ships on DOM gameboard
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		if (board1.array[i][j]) {
			let square = document.querySelector(`.b1rowcol${i}${j}`);
			square.style.backgroundColor = 'blue';
			square.style.borderColor = 'black';
		}
	}
}

for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		if (board2.array[i][j]) {
			let square = document.querySelector(`.b2rowcol${i}${j}`);
			// square.style.backgroundColor = 'blue';
			// square.style.borderColor = 'black';
		}
	}
}






