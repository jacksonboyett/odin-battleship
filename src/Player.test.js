const Ship = require('./Ship.js');
const Gameboard = require('./Gameboard.js');
const Player = require('./Player.js');

test('player can fire on the opposing board', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	let player1 = Player('jackson');
	board.placeShip(destroyer, [2,2]);
	player1.attack(board, [2,2])
	expect(destroyer.hitCount).toBe(1);
});

test('player can fire multiple times on the opposing board', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	let player1 = Player('jackson');
	board.placeShip(destroyer, [2,2]);
	player1.attack(board, [2,2]);
	player1.attack(board, [3,2]);
	player1.attack(board, [4,2]);
	player1.attack(board, [5,2]);
	player1.attack(board, [6,2]);
	expect(destroyer.hitCount).toBe(5);
});

test('player can fire multiple times on the opposing board and sink ship', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	let player1 = Player('jackson');
	board.placeShip(destroyer, [2,2]);
	player1.attack(board, [2,2]);
	player1.attack(board, [3,2]);
	player1.attack(board, [4,2]);
	player1.attack(board, [5,2]);
	player1.attack(board, [6,2]);
	destroyer.isSunk();
	expect(destroyer.sunk).toBe(true);
});

// *** USES MOCK FUNCTION ***
test('computer takes a shot', () => {
	let player1 = Player('computer');
	let board = Gameboard();
	let destroyer = Ship('destroyer', 2);
	let carrier = Ship('carrier', 3);
	board.placeShip(destroyer, [0,0]);
	board.placeShip(carrier, [0,1]);
	board.mockRecieveCompAttack();
	expect(destroyer.hitCount).toBe(1);
});

// *** USES MOCK FUNCTION 
test('computer does not shoot at same location twice', () => {
	let player1 = Player('computer');
	let board = Gameboard();
	let destroyer = Ship('destroyer', 2);
	let carrier = Ship('carrier', 3);
	board.placeShip(destroyer, [0,0]);
	board.placeShip(carrier, [0,1]);
	board.mockRecieveCompAttack();
	expect(board.mockRecieveCompAttack()).toBe('You already shot at that location!');
});


