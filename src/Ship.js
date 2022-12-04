// Ship Object Factory
const Ship = (name, length) => {
	let hitCount = 0;
	let sunk = false; 

	function hit() {
		this.hitCount++;
		this.isSunk();
	}

	function isSunk() {
		if (this.hitCount >= length) {
			this.sunk = true; 
		} 
	}

	return {
		name: name,
		length: length,
		hitCount: hitCount,
		sunk: sunk,
		hit, 
		isSunk
	}
}

module.exports = Ship;