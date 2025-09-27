/* ## **Problem: Shortest Distance Between Two Vowels**

Write a program that takes a single word (string) as input and finds the **shortest distance between any two vowels** in the word.

* **Distance** is defined as the absolute difference between the **positions (indices)** of two vowels in the string.
* If the word contains **fewer than two vowels**, print `-1`.
* Consider only lowercase letters (`a, e, i, o, u`) as vowels.
* Indices start from `0` (first character is at position 0).

---

### **Examples**

| Input     | Output | Explanation                                               |
| --------- | ------ | --------------------------------------------------------- |
| hello     | 2      | Vowels: e at index 1, o at index 4 → distance = 4 − 1 = 3 |
| apple     | 4      | Vowels: a at index 0, e at index 4 → distance = 4         |
| strength  | -1     | Only one vowel (`e`) → output -1                          |
| beautiful | 1      | Vowels: e at 1, a at 2 → distance = 1                     |
| abyss     | -1     | Only one vowel (`a`) → output -1                          |

---

### **Constraints**

* Input will be a single word containing only lowercase English letters.
* Word length ≤ 1000 characters.

--- */

function findShortDistance(string) {
  let currentVowelIndex = -1;
  let nextVowelIndex = -1;
  let isVowelFound = false;
  let shortDifference = 100;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u") {
      if (!isVowelFound) {
        currentVowelIndex = index;
        isVowelFound = true;
      } else {
        nextVowelIndex = index;
      }

      if (currentVowelIndex !== -1 && nextVowelIndex !== -1) {
        shortDifference = (shortDifference > nextVowelIndex - currentVowelIndex) ? nextVowelIndex - currentVowelIndex : shortDifference;
        currentVowelIndex = nextVowelIndex;
      }
    }
  }
  if (nextVowelIndex === -1) {
    return -1;
  }
  return shortDifference;
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


