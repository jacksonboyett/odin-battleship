const Ship = require('./Ship.js');

test('ship object', () => {
	let destroyer = Ship('destroyer', 5);
	destroyer.hit();
	expect(destroyer.hitCount).toBe(1);
});

test('ship object', () => {
	let destroyer = Ship('destroyer', 5);
	destroyer.hitCount = 5;
	destroyer.isSunk();
	expect(destroyer.sunk).toBe(true);
});