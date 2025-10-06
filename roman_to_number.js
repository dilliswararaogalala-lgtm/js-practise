function convertRomanNumbers(string) {
  return 1;
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
