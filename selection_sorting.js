const listOfNumbers = [119, 120, 140, 28, 69, 1];

for (let i = listOfNumbers.length - 1; i >= 0; i--) {
  let temp = listOfNumbers[0];
  let index = 0;
  for (let j = 1; j <= i; j++) {
    if (listOfNumbers[j] < temp) {
      temp = listOfNumbers[j];
      index = j;
    }
  }
  const temp1 = listOfNumbers[i];
  listOfNumbers[i] = temp;
  listOfNumbers[index] = temp1;
  console.log(listOfNumbers);
}
