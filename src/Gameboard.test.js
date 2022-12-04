const Gameboard = require('./Gameboard.js');
const Ship = require('./Ship.js');

test('ship placement', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [0,0]);
	expect(board.array[0][0]).toBe(destroyer);
});

test('ship placement', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [0,0]);
	expect(board.array[0][destroyer.length - 1]).toBe(destroyer);
});

test('ship placement', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	let xyInit = [2,2];
	board.placeShip(destroyer, xyInit);
	expect(board.array[xyInit[1]][4]).toBe(destroyer);
});

test('ship hit', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [2,2]);
	board.recieveAttack([2,2]);
	expect(destroyer.hitCount).toBe(1);
});

test('ship hit multiple times', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [2,2]);
	board.recieveAttack([2,2]);
	board.recieveAttack([3,2]);
	board.recieveAttack([4,2]);
	board.recieveAttack([5,2]);
	board.recieveAttack([6,2]);
	expect(destroyer.hitCount).toBe(5);
});

test('ship is sunk when hit === length', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [2,2]);
	board.recieveAttack([2,2]);
	board.recieveAttack([3,2]);
	board.recieveAttack([4,2]);
	board.recieveAttack([5,2]);
	board.recieveAttack([6,2]);
	destroyer.isSunk();
	expect(destroyer.sunk).toBe(true);
});

test('ship is not sunk when hit != length', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [2,2]);
	board.recieveAttack([2,2]);
	board.recieveAttack([3,2]);
	board.recieveAttack([4,2]);
	board.recieveAttack([5,2]);
	destroyer.isSunk();
	expect(destroyer.sunk).toBe(false);
});

test('gameboard records a miss properly', () => {
	let destroyer = Ship('destroyer', 5);
	let board = Gameboard(); 
	board.placeShip(destroyer, [2,2]);
	board.recieveAttack([1,2]);
	expect(board.array[2][1]).toBe(0);
});

test('gameboard reports when all ships are sunk', () => {
	let board = Gameboard();
	let destroyer = Ship('destroyer', 2);
	let carrier = Ship('carrier', 3);
	board.placeShip(destroyer, [0,0]);
	board.placeShip(carrier, [0,1]);
	board.recieveAttack([0,0]); board.recieveAttack([1,0]); 
	board.recieveAttack([0,1]); board.recieveAttack([1,1]); board.recieveAttack([2,1]);
	destroyer.isSunk();
	carrier.isSunk();
	board.isAllSunk();
	expect(board.allSunk).toBe(true);
});