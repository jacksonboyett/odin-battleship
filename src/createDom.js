import attack from "./attack";

export default function createDom() {
	// *** Create boards ***
let board1 = document.querySelector('.board1');
let board2 = document.querySelector('.board2');

for (let i = 0; i < 10; i++) {
	let row = document.createElement('div');
	row.classList.add(`row`);
	row.classList.add(`b1row${i}`);
	for (let j = 0; j < 10; j++) {
		let square = document.createElement('div');
		square.classList.add('square');
		square.classList.add(`b1rowcol${i}${j}`);
		// square.addEventListener('click', attack);
		row.appendChild(square);
	}
	board1.appendChild(row);
}

for (let i = 0; i < 10; i++) {
	let row = document.createElement('div');
	row.classList.add(`row`);
	row.classList.add(`b2row${i}`);
	for (let j = 0; j < 10; j++) {
		let square = document.createElement('div');
		square.classList.add('square');
		square.classList.add(`b2rowcol${i}${j}`);
		// square.addEventListener('click', attack);
		row.appendChild(square);
	}
	board2.appendChild(row);
}
}

