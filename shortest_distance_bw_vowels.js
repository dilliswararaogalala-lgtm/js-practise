
function findShortDistance(string) {
  let currentVowelIndex = -1;
  let nextVowelIndex = -1;
  let shortDistance = 100;

  for (let index = 0; index < string.length; index++) {

    if (string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u") {

      if (currentVowelIndex === -1) {
        currentVowelIndex = index;
      } else {
        nextVowelIndex = index;
      }

      if (currentVowelIndex !== -1 && nextVowelIndex !== -1) {
        shortDistance = (shortDistance > nextVowelIndex - currentVowelIndex) ? nextVowelIndex - currentVowelIndex : shortDistance;
        currentVowelIndex = nextVowelIndex;
      }
    }
  }
  if (nextVowelIndex === -1) {
    return -1;
  }
  return shortDistance;
}

function fragmantMessage(string, distance, expected) {
  let message = (distance === expected) ? "✅ " : "❌ ";
  message += " shortest distance between vowels in the " + string;;
  message += " it should be " + distance + " and it is " + expected;
  return message;
}

function checkDistanceBetweenVowels(string, expected) {
  const shortestDistance = findShortDistance(string);
  const message = fragmantMessage(string, shortestDistance, expected);
  console.log(message);
}

function testAll() {
  checkDistanceBetweenVowels("ab", -1);
  checkDistanceBetweenVowels("a", -1);
  checkDistanceBetweenVowels("abc", -1);
  checkDistanceBetweenVowels("abcd", -1);
  checkDistanceBetweenVowels("abed", 2);
  checkDistanceBetweenVowels("cabed", 2);
  checkDistanceBetweenVowels("hello", 3);
  checkDistanceBetweenVowels("beauty", 1);
  checkDistanceBetweenVowels("umbrella", 3);
  checkDistanceBetweenVowels("beautiful", 1);
}

testAll();


