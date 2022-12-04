import { board1 } from "./index.js";
import { board2 } from "./index.js";

export default function attack() {
	let squareCoords = Array.from(this.classList[1]);
	let x = Number(squareCoords.slice(-2, -1));
	let y = Number(squareCoords.slice(-1));
	let xy = [y, x];
	board2.recieveAttack(xy);
	let display = document.querySelector('.instructions');
	setTimeout(board1.recieveCompAttack, 500);
	if (board1.isAllSunk() === true) {
		console.log('The computer won :(');
		display.textContent = 'The computer won :(';
	} else if (board2.isAllSunk() === true) {
		console.log('You won!')
		display.textContent = 'You won!!!';
	}
	this.removeEventListener('click', attack);
}
