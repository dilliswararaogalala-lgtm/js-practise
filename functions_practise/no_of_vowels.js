const string = "shivaji";
let vowelCount = 0;
const lengthOfString = string.length;

for (let index = 0; index < lengthOfString; index++) {
  if (string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u") {
    vowelCount++;
  }
}

console.log(vowelCount);
