// const Gameboard = require('./Gameboard')

// Player Object Factory
const Player = (name) => {
	function attack(board, xyAttack) {
		board.recieveAttack(xyAttack)
	}

	function computerAttack(board) {
		board.recieveCompAttack();
	}

	return {
		name: name,
		attack,
		computerAttack
	}
}

module.exports = Player;