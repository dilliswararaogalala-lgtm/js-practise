const BOARD = ["⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️"];
const WIN_SETS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const SYMBOLS = ["❌", "⭕️"];
const USERS = [];

function createNextLine() {
  return console.log();
}

function printBoard() {
  let string = "";

  for (let index = 0; index < BOARD.length; index++) {
    if (index % 3 === 0) {
      string += "\n\t";
    }
    string += BOARD[index];
  }

  console.log(string);
  createNextLine();
}

function getUserTurn(USERS, order = 1) {
  return USERS[order - 1];
}

function getSymbol(SYMBOLS, order = 1) {
  return SYMBOLS[order - 1];
}

function isValid(numberAsString) {
  const number = parseInt(numberAsString);
  return number > 0 && number < 10 && BOARD[number - 1].includes("⬜️");
}

function isHeWon(WIN_SETS, symbol) {
  let firstNumber = false;
  let secondNumber = false;
  let thirdNumber = false;

  for (let index = 0; index < WIN_SETS.length; index++) {
    const sets = WIN_SETS[index];
    firstNumber = BOARD[sets[0]] === symbol;
    secondNumber = BOARD[sets[1]] === symbol;
    thirdNumber = BOARD[sets[2]] === symbol;
    if (firstNumber && secondNumber && thirdNumber) return true;
  }

  return false;
}

function isGameOver() {
  return !BOARD.includes("⬜️");
}

function ticTacToe() {
  let order = 1;
  let isWon = false;
  let isDraw = false;
  USERS.push(prompt('enter player 01 name:'));
  USERS.push(prompt('enter player 02 name:'));

  while (!isWon && !isDraw) {
    const user = getUserTurn(USERS, order);
    const symbol = getSymbol(SYMBOLS, order);
    console.log(`It is ${user}'s turn ${symbol}`);
    const cellNumber = prompt("enter the cell no:");

    if (isValid(cellNumber)) {
      BOARD[cellNumber - 1] = symbol;
      console.clear();
      console.log(`${isHeWon(WIN_SETS, symbol)}`);
      printBoard();
      order = order === 1 ? 2 : 1;
    } else {
      console.log("INVALID INPUT");
      continue;
    }

    if (isHeWon(WIN_SETS, symbol)) {
      console.log(`${user} won`);
      isWon = true;
    }

    if (isGameOver()) {
      console.log(`its draw`);
      isDraw = true;
    }
  }
}

ticTacToe();
