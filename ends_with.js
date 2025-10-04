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

function checkEndsWith(string, substring, expectedOutput) {
  const actualValue = endsWith(string, substring);
  const resultMessage = (actualValue === expectedOutput) ? "✅" : "❌";
  console.log(resultMessage, string, "ends with ", substring, "should be ", actualValue, "and it is ", expectedOutput);
}

checkEndsWith("hello world", "ld", true);
checkEndsWith("hii dilli", "dilli", true);
checkEndsWith("namastae babu", "abu", true);
checkEndsWith("namstae ganesh", "esh", true);
checkEndsWith("namo namaha", " ", false);
checkEndsWith("ojas gambheera", "gambhera", true);
