const WIDTH = 30;
const HEIGHT = 10;

const screen = (rows, cols) => {
  const spaces = [];
  for (let row = 0; row < rows; row++) {
    spaces.push(" ".repeat(cols).split(""));
  }
  return spaces;
};

const displayBoard = (board) => {
  const lines = board.map((row) => row.join(""));
  console.log(lines.join("\n"));
};

const putName = (board, { name, x, y }) => {
  const charactersList = name.split("");
  const width = board[x].length;

  for (const character of charactersList) {
    board[x][((y % width) + width) % width] = character;
    y = y + 1;
  }
};

const putNameInXAxis = (board, {name, x, y}) => {
  const charactersOfName = name.split('');
  const height = board.length;

  for (const character of charactersOfName) {
    board[((x % height) + height) % height][y] = character;
    x = x + 1;
  }
}

const marquees = [
  { name: "dilli", x: 1, y: 10, direction: "r", speed: 3 },
  { name: "hemanth", x: 0, y: 0, direction: "f", speed: 1 },
  { name: "khasim", x: 5, y: 4, direction: "f", speed: 2 },
  { name: "nikhil", x: 6, y: 4, direction: "r", speed: 4 },
  { name: "himanshu", x: 9, y: -1, direction: "f", speed: 3 },
  { name: "dilli", x: 1, y: 10, direction: "v", speed: 1 },
  { name: "ramana", x: 15, y: 5, direction: "vr", speed: 2 },
];

const moveForward = (marquee, board) => {
  marquee.y = (marquee.y + marquee.speed) % WIDTH;
  putName(board, marquee);
};

const moveReverse = (marquee, board) => {
  marquee.y = (marquee.y - marquee.speed) % WIDTH;
  putName(board, marquee);
};

const moveVertical = (marquee, board) => {
  marquee.x = (marquee.x + marquee.speed) % HEIGHT;
  putNameInXAxis(board, marquee);
}

const moveVerticalReverse = (marquee, board) => {
  marquee.x = (marquee.x - marquee.speed) % HEIGHT;
  putNameInXAxis(board, marquee);
}

const directionToGo = {
  f: moveForward,
  r: moveReverse,
  v: moveVertical,
  vr: moveVerticalReverse,
};

const step = () => {
  console.clear();
  const board = screen(HEIGHT, WIDTH);
  marquees.forEach((marquee) => {
    directionToGo[marquee.direction](marquee, board);
  });

  displayBoard(board);
};

setInterval(step, 150);
