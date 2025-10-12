function doesWantToPlayAgain() {
  const doPlayagain = confirm("do you want to continue the game:");

  if (doPlayagain) {
    return guessingGame();
  } else {
    console.log("😊 thank you for playing");
    return;
  }
}

function guessNumber(secretNumber, chances) {
  let isHeWon = false;

  while (!isHeWon && chances > 0) {
    const guessNumberAsStr = prompt("guess a number:");
    const guessedNumber = parseInt(guessNumberAsStr);

    if (guessedNumber === secretNumber) {
      console.log("🎉 Correct! You guessed the number!");
      isHeWon = true;
    } else if (guessedNumber > secretNumber) {
      console.log("It is too large number!");
    } else {
      console.log("It is too small number");
    }

    chances--;
  }

  if (!isHeWon) {
    console.log(`😢 Sorry! You ran out of chances. The correct number was ${secretNumber} `);
  }

  return doesWantToPlayAgain();
}

function guessingGame() {
  const secretNumber = Math.ceil(Math.random() * 100);
  guessNumber(secretNumber, 10)
}

guessingGame();
