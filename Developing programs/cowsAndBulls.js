function isHeWon(cows, bulls, number) {
  if (bulls === number.length && cows === 0) {
    console.log();
    console.log("YOU WON 🏆");
    return;
  } else {
    console.log();
    console.log(`🐮 cows count: ${cows} \n🐂 bulls count: ${bulls}`);
    return;
  }
}

function startGame(secretNumber, guessedNumber, cows, bulls) {
  for (let index = 0; index < guessedNumber.length; index++) {
    if (secretNumber.includes(guessedNumber[index])) {
      const indexOfNumber = (guessedNumber.indexOf(guessedNumber[index]));
      if (secretNumber[indexOfNumber] === guessedNumber[index]) {
        bulls++;
      } else {
        cows++;
      }
    }
  }
  return isHeWon(cows, bulls, secretNumber);
}

function getRandomNumber() {
  const num = [];
  for (let index = 0; index < 4; index++) {
    const numberAsString = '' + (Math.floor(Math.random() * 9 + 1));
    num.push(numberAsString);
  }
  return num;
}

function main() {
  const secretNumber = getRandomNumber();
  const guessedNumber = prompt('enter your  number:').split('');
  startGame(secretNumber, guessedNumber, 0, 0);
}

main();
