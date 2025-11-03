function encodeIntegers(data) {
  return `i${data}e`;
}

function encode(data) {
  const typeOfData = typeof data;
  switch (typeOfData) {
    case 'number':
      return encodeIntegers(data);
  }
}

function createMessage(descrip, symbol, expected, exactOutput) {
  let dataPoints = `\n=> expected:\n${expected}\n`;
  dataPoints += `=> encoded date:\n${exactOutput} \n`;
  const withOutDataPoints = `${symbol}| ${descrip}`;
  const withDataPoints = `${symbol}| ${descrip}${dataPoints}`;
  const message = symbol === "✅" ? withOutDataPoints : withDataPoints;
  return message;
}

function getSymbol(expected, exactOutput) {
  return expected === exactOutput ? "✅" : "❌";
}

function testEncode(descrip, data, expected) {
  const encodedData = encode(data);
  const symbol = getSymbol(expected, encodedData);
  const message = createMessage(descrip, symbol, expected, encodedData);
  console.log(message);
}

function repeatChar(char, noOfTimes) {
  return char.repeat(noOfTimes);
}

function underline(string) {
  return `\n${string}\n${repeatChar("-", string.length)}\n`
}

function testIntegers() {
  console.log(underline('INTEGERS'));
  testEncode("positive integer", 123, 'i123e');
  testEncode("positive integer", 423, 'i423e');
  testEncode("positive integer", 675, 'i675e');
  testEncode("negative integer", -675, 'i-675e');
}

testIntegers();
