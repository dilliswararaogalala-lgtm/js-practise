function convertRomanNumbers(string) {
  let numericalValue = convertRoman(string.at(string.length - 1));
  for (let index = string.length - 1; index > 0; index--) {
    const previousIndex = index;
    const currentIndex = index - 1;
    if (convertRoman(string[currentIndex]) < convertRoman(string[previousIndex])) {
      numericalValue = convertRoman(string[previousIndex]) - convertRoman(string[currentIndex])
    } else {
      numericalValue = numericalValue + convertRoman(string[currentIndex]);
    }
  }
  return numericalValue;
}

function convertRoman(romanNumber) {
  switch (romanNumber) {
    case 'I': return 1;
    case "V": return 5;
    case "X": return 10;
    case "L": return 50;
    case "C": return 100;
    case "D": return 500;
    case "M": return 1000;
  }
}

function createMessage(discrip, romanValue, numericalValue, expected) {
  const isTrue = expected === numericalValue;
  const symbol = isTrue ? "✅" : "❌";
  let dataPoints = "=> " + "Roman number: " + romanValue + "\n";
  dataPoints += " => " + "output: " + numericalValue + "\n";
  const withOutDataPoints = `${symbol}| ${discrip}`;
  const withDataPoints = `${symbol}${discrip}\n${dataPoints}`;
  const message = isTrue ? withOutDataPoints : withDataPoints;
  return message;
}

function testRomanNumbers(discrip, romanNumber, expected) {
  const numericalValue = convertRomanNumbers(romanNumber);
  const message = createMessage(discrip, romanNumber, numericalValue, expected);
  console.log(message);
}

testRomanNumbers("roman number of 1", "I", 1);
testRomanNumbers("roman number of 2", "II", 2);
testRomanNumbers("roman number of 3", "III", 3);
testRomanNumbers("roman number of 4", "IV", 4);
testRomanNumbers("roman number of 5", "V", 5);
testRomanNumbers("roman number of 6", "VI", 6);
testRomanNumbers("roman number of 7", "VII", 7);
testRomanNumbers("roman number of 8", "VIII", 8);
testRomanNumbers("roman number of 9", "IX", 9);
testRomanNumbers("roman number of 10", "X", 10);
testRomanNumbers("roman number of 11", "XI", 11);
testRomanNumbers("roman number of 12", "XII", 12);
testRomanNumbers("roman number of 13", "XIII", 13);
testRomanNumbers("roman number of 14", "XIV", 14);
testRomanNumbers("roman number of 15", "XV", 15);
testRomanNumbers("roman number of 16", "XVI", 16);
testRomanNumbers("roman number of 17", "XVII", 17);
testRomanNumbers("roman number of 18", "XVIII", 18);
testRomanNumbers("roman number of 19", "XIX", 19);
testRomanNumbers("roman number of 20", "XX", 20);
testRomanNumbers("roman number of 50", "L", 50);
testRomanNumbers("roman number of 100", "C", 100);
testRomanNumbers("roman number of 500", "D", 500);
testRomanNumbers("roman number of 1000", "M", 1000);
