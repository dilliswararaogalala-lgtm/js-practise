const BOARD = ["⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️"];
const WIN_SETS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const SYMBOLS = ["❌", "⭕️"];
const users = [];


function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}
function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}
function yellow(text) {
  return "\x1B[33m" + text + "\x1B[0m";
}
function blue(text) {
  return "\x1B[34m" + text + "\x1B[0m";
}
function magenta(text) {
  return "\x1B[35m" + text + "\x1B[0m";
}
function white(text) {
  return "\x1B[37m" + text + "\x1B[0m";
}

function printBoard() {
  let string = "";

  for (let index = 0; index < BOARD.length; index++) {
    if (index % 3 === 0) {
      string += "\n\t";
    }
    string += BOARD[index];
  }

  console.log(`${string} \n`);
  console.log();
}

function isValid(numberAsString) {
  const number = parseInt(numberAsString);
  return number > 0 && number < 10 && BOARD[number - 1].includes("⬜️");
}

function isUserWon(WIN_SETS, symbol) {

  for (let index = 0; index < WIN_SETS.length; index++) {
    const sets = WIN_SETS[index];
    const firstNumber = BOARD[sets[0]] === symbol;
    const secondNumber = BOARD[sets[1]] === symbol;
    const thirdNumber = BOARD[sets[2]] === symbol;
    if (firstNumber && secondNumber && thirdNumber) return true;
  }

  return false;
}

function updatePositionOnBoard(cellNumber, symbol) {
  BOARD[cellNumber - 1] = symbol;
  console.clear();
  printBoard();
}

function findWhoWon(user, symbol) {
  if (isUserWon(WIN_SETS, symbol)) {
    console.log(green(`🤪 ${user} won`));
    return true;
  }
}

function isGameDraw() {
  if (!BOARD.includes("⬜️")) {
    console.log(red(`😝 it's draw`));
    return true;
  }
}

function startCompMode(isWon, isDraw, order) {
  while (!isWon && !isDraw) {
    const user = users[order - 1];
    const symbol = SYMBOLS[order - 1];

    if (order === 1) {
      console.log(white(`\nIt is ${user}'s turn ${symbol}\n`));
      const cellNumber = prompt(magenta("enter the cell no:"));

      if (isValid(cellNumber)) {
        updatePositionOnBoard(cellNumber, symbol);
        order = order === 1 ? 2 : 1;
      } else {
        console.log(red("\nINVALID INPUT"));
        prompt(green("\nenter to continue...."));
        console.clear();
        printBoard();
        continue;
      }

    } else {
      let cellNumber = Math.floor(Math.random() * 10);

      if (cellNumber <= 0) {
        cellNumber = Math.floor(Math.random() * 10);
      }

      if (isValid(cellNumber)) {
        updatePositionOnBoard(cellNumber, symbol);
        order = order === 2 ? 1 : 2;
      } else {
        continue;
      }

    }

    isWon = findWhoWon(user, symbol);
    if (!isWon) isDraw = isGameDraw();
  }
}

function computerMode() {
  const welcomeText = '\nWelcome to the computer mode 😊';
  console.log(green(welcomeText));
  const playerstext = '\nenter player name:';
  users.push(prompt(yellow(playerstext)));
  users.push("computer");
  startCompMode(false, false, 1);
}

computerMode();
