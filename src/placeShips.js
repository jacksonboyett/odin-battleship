import Ship from './Ship.js';
import createDom from './createDom.js';
import Gameboard from './Gameboard.js';
import Player from './Player.js';
import attack from './attack.js';
import { board1 } from './index.js';
import { ship10 } from './index.js';
import { ship11 } from './index.js';
import { ship12 } from './index.js';
import { ship13 } from './index.js';
import { ship14 } from './index.js';

export default function placeShips() {
	let instructions = document.querySelector('.instructions');
	instructions.textContent = 'Please place your ships';
  modifySquareDisplay();
  addPlaceListener();
}

function addAttackListener() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let square = document.querySelector(`.b2rowcol${i}${j}`);
			square.addEventListener('click', attack);
		}
	}
}

function modifySquareDisplay() {
  let shipDisplay = document.querySelector('.shipDisplay');
  let newSquare = document.createElement('div');
  newSquare.classList.add('squareDisplay');
  shipDisplay.append(newSquare);
}

function removeSquares() {
	let square = document.querySelector('.squareDisplay');
	square.remove();
}

function addPlaceListener() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let square = document.querySelector(`.b1rowcol${i}${j}`);
      square.addEventListener('click', place);
    }
  }
}

let counter = 0;
function place() {
  if (counter === 0) {
		// board1.placeShip(ship10, [0,0])
    let squareCoords = Array.from(this.classList[1]);
    let x = Number(squareCoords.slice(-2, -1));
    let y = Number(squareCoords.slice(-1));
    let xy = [x, y];
    board1.placeShip(ship10, xy);
		counter++;
		console.log('Carrier placed')
		changeSquare(this, counter);
		modifySquareDisplay();
  } else if (counter === 1) {
		let squareCoords = Array.from(this.classList[1]);
    let x = Number(squareCoords.slice(-2, -1));
    let y = Number(squareCoords.slice(-1));
    let xy = [y, x];
    board1.placeShip(ship11, xy);
		counter++;
		console.log('Battleship placed')
		changeSquare(this, counter);
		modifySquareDisplay();
	} else if (counter === 2) {
		let squareCoords = Array.from(this.classList[1]);
    let x = Number(squareCoords.slice(-2, -1));
    let y = Number(squareCoords.slice(-1));
    let xy = [y, x];
    board1.placeShip(ship12, xy);
		counter++;
		console.log('Cruiser placed')
		changeSquare(this, counter);
		modifySquareDisplay();
	} else if (counter === 3) {
		let squareCoords = Array.from(this.classList[1]);
    let x = Number(squareCoords.slice(-2, -1));
    let y = Number(squareCoords.slice(-1));
    let xy = [y, x];
    board1.placeShip(ship13, xy);
		counter++;
		console.log('Submarine placed')
		changeSquare(this, counter);
		modifySquareDisplay();
	} else if (counter === 4) {
		let squareCoords = Array.from(this.classList[1]);
    let x = Number(squareCoords.slice(-2, -1));
    let y = Number(squareCoords.slice(-1));
    let xy = [y, x];
    board1.placeShip(ship14, xy);
		counter++;
		console.log('Destroyer placed')
		changeSquare(this, counter);
		for (let i = 0; i < 5; i++) {
			removeSquares(0)
		}
		let instructions = document.querySelector('.instructions');
		instructions.textContent = 'Start playing!';
		document.querySelector('.start').remove();
		addAttackListener();
	} else { 
		console.log(board1)
		return
	 }
}

function changeSquare(square, counter) {
	square.style.backgroundColor = 'blue';
	for (let i = 0; i < counter - 1; i++) {
		let next = square.nextSibling;
		next.style.backgroundColor = 'blue';
		square = next;
	}
}
