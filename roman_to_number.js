function convertRomanNumbers(string) {
  switch (string) {
    case 'I':
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
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
testRomanNumbers("roman number of 5", "V", 5);
testRomanNumbers("roman number of 10", "X", 10);
testRomanNumbers("roman number of 50", "L", 50);
testRomanNumbers("roman number of 100", "C", 100);
testRomanNumbers("roman number of 500", "D", 500);
testRomanNumbers("roman number of 1000", "M", 1000);
