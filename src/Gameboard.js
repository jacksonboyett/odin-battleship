// Gameboard Factory

const Gameboard = () => {
  let allSunk = false;
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = [];
    for (let j = 0; j < 10; j++) {
      array[i][j] = null;
    }
  }

  let arrayHitLog = [];
  for (let i = 0; i < 10; i++) {
    arrayHitLog[i] = [];
    for (let j = 0; j < 10; j++) {
      arrayHitLog[i][j] = 0;
    }
  }

  function placeShip(ship, xyInit) {
    // 5 and [0,0];
    for (let i = xyInit[0]; i < ship.length + xyInit[0]; i++) {
      this.array[xyInit[1]][i] = ship;
    }
  }

  function recieveAttack(xyAttack) {
    let y = xyAttack[0];
    let x = xyAttack[1];
    let ship = array[x][y];
    let square = document.querySelector(`.b2rowcol${x}${y}`);
    if (ship) {
      ship.hit();
      square.style.backgroundColor = 'red';
    } else {
      array[xyAttack[1]][xyAttack[0]] = 0;
      square.style.backgroundColor = 'green';
    }
  }

  function recieveCompAttack() {
    let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);
    let square = document.querySelector(`.b1rowcol${y}${x}`);
    let shot = array[y][x];
    if (arrayHitLog[y][x] != 1) {
      if (shot) {
        shot.hit();
        arrayHitLog[y][x] = 1;
        square.style.backgroundColor = 'red';
      } else {
        array[y][x] = 0;
        arrayHitLog[y][x] = 1;
        square.style.backgroundColor = 'green';
      }
			return arrayHitLog[y][x]
    } else {
			recieveCompAttack();
		}
  }

	function mockRecieveCompAttack() {
		let xyAttack = [0, 0];
    let shot = array[xyAttack[1]][xyAttack[0]];
    let logHit = [xyAttack[1]][xyAttack[0]];
    if (arrayHitLog[logHit] != 1) {
      if (shot) {
        shot.hit();
        arrayHitLog[logHit] = 1;
      } else {
        array[xyAttack[1]][xyAttack[0]] = 0;
        arrayHitLog[logHit] = 1;
      }
			return arrayHitLog[logHit]
    } else {
			return 'You already shot at that location!';
		}
  }
	
  function isAllSunk() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (array[i][j] === null) continue;
        if (array[i][j].sunk === false) {
          return this.allSunk;
        }
      }
    }
    this.allSunk = true;
    return this.allSunk;
  }

  return {
    allSunk: allSunk,
    array: array,
    placeShip,
    recieveAttack,
    recieveCompAttack,
		mockRecieveCompAttack,
    isAllSunk,
  };
};
module.exports = Gameboard;


// TODO 
// Prevent computer from attack spaces that is has already attacked