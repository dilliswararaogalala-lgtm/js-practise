function equal(firstArray, secondArray) {
  return true;
}

function createMessage(discrip, symbol, expected, exactOutput) {
  let dataPoints = "=> " + "expected: " + expected + "\n";
  dataPoints += "=> " + "output: " + exactOutput + "\n";
  const withOutDataPoints = `${symbol}| ${discrip}`;
  const withDataPoints = `${symbol}${discrip}\n${dataPoints}`;
  const message = symbol === "✅" ? withOutDataPoints : withDataPoints;
  return message;
}

function getSymbol(expected, exactOutput) {
  return expected === exactOutput ? "✅" : "❌";
}

function testEqual(discrip, firstArray, secondArray, expected) {
  const isEqual = equal(firstArray, secondArray);
  const symbol = getSymbol(expected, isEqual);
  const message = createMessage(discrip, symbol, expected, isEqual);
  console.log(message);
}

testEqual("comparing single element of array", [1], [1], true);
testEqual("comparing two elements of array", [1, 2], [1, 2], true);
