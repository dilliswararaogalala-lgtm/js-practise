function isHeWon(cows, bulls, number) {
  if (bulls === number.length && cows === 0) {
    console.log();
    console.log("YOU WON 🏆");
    return true;
  } else {
    console.log();
    console.log(`🐮 cows count: ${cows} \n🐂 bulls count: ${bulls}`);
    return false;
  }
}

function cowsAndBullsGame(secretNumber, chances, cows, bulls) {
  let isWon = false;
  while (!isWon && chances > 0) {
    const guessedNumber = prompt('enter your  number:').split('');

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

    isWon = isHeWon(cows, bulls, secretNumber);
    cows = 0; bulls = 0;
    chances--;
  }
  console.log(`secret number is : ${secretNumber.join('')}`);
}

function getRandomNumber(length) {
  let num = '';
  while (length > 0) {
    const number = '' + Math.floor(Math.random() * 9 + 1);
    if (num.includes(number)) continue;
    num += number;
    length--;
  }
  return num.split('');
}

function main() {
  const lengthOfNumber = prompt("enter the length of number: ")
  const secretNumber = getRandomNumber(lengthOfNumber);
  cowsAndBullsGame(secretNumber, 5, 0, 0);
}

main();
