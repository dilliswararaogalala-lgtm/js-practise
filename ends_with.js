/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function endsWith(string, substring) {
  // Implementation here.
  const differenceOfLength = string.length - substring.length;
  if (differenceOfLength < 0) {
    return false;
  }
  return substring === createSubstring(string, differenceOfLength, "");
}

function createSubstring(string, length, otherString) {
  if (length > string.length - 1) {
    return otherString;
  }
  return otherString += string.at(length) + createSubstring(string, length + 1, otherString);
}

function createMessage(discrip, substring, actualValue, expected) {
  const isTrue = expected === actualValue;
  const symbol = isTrue ? "✅" : "❌";
  let dataPoints = "=> " + "substring: " + substring + "\n";
  dataPoints += " => " + "output: " + actualValue + "\n";
  const message = isTrue ? `${symbol} ${discrip}` : `${symbol} ${discrip} \n ${dataPoints}`;
  return message;
}

function checkEndsWith(discrip, string, substring, expectedOutput) {
  const isEndsWith = endsWith(string, substring);
  const resultMessage = createMessage(discrip, substring, isEndsWith, expectedOutput);
  console.log(resultMessage);
}

checkEndsWith("substring of length 2 at end", "hello world", "ld", true);
checkEndsWith("substring of length 5 at end", "hii dilli", "dilli", true);
checkEndsWith("substring of length 3 at end", "namastae babu", "abu", true);
checkEndsWith("substring of length 3 at end", "namstae ganesh", "esh", true);
checkEndsWith("find space as a substring at end", "namo namaha", " ", false);
checkEndsWith("misspelled substring in given string", "ojas gambheera", "gambhera", false);
