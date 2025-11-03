function isHeWon(cows, bulls, number) {
  if (bulls === number.length && cows === 0) {
    console.log();
    console.log("\nYOU WON 🏆");
    return true;
  } else {
    console.log();
    console.log(`\n🐮 cows count: ${cows} \n🐂 bulls count: ${bulls}`);
    return false;
  }
}

function isValid(number) {
  const copiedNumbers = [];
  for (let index = 0; index < number.length; index++) {
    if (copiedNumbers.includes(number[index])) {
      return false;
    } else {
      copiedNumbers.push(number[index]);
    }
  }
  return true;
}

function cowsAndBullsGame(secretNumber, chances, cows, bulls) {
  let isWon = false;
  while (!isWon && chances > 0) {
    const guessedNumber = prompt('\nenter your  number:').split('');
    const isValidOrNot = isValid(guessedNumber);
    if (isValidOrNot) {

      for (let index = 0; index < guessedNumber.length; index++) {
        if (secretNumber.includes(guessedNumber[index])) {
          if (secretNumber[index] === guessedNumber[index]) {
            bulls++;
          } else {
            cows++;
          }
        }
      }

      isWon = isHeWon(cows, bulls, secretNumber);
      cows = 0; bulls = 0;
      chances--;
    } else {
      console.log("\nINVALID INPUT");
      prompt('\nenter to continue....');
    }
  }

  console.log(`\nsecret number is : ${secretNumber.join('')}`);
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
  console.log(`\nWelcome to the game ☺️`);
  const lengthOfNumber = prompt("\nenter the length of number: ")
  const secretNumber = getRandomNumber(lengthOfNumber);
  cowsAndBullsGame(secretNumber, 5, 0, 0);
}

main();
