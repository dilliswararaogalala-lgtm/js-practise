function encodeIntegers(data) {
  return `i${data}e`;
}

function encodeString(data) {
  return `${data.length}:${data}`;
}

function encode(data) {
  const typeOfData = typeof data;
  switch (typeOfData) {
    case 'number':
      return encodeIntegers(data);
    case 'string':
      return encodeString(data);
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

function testForIntegers() {
  console.log(underline('INTEGERS'));
  testEncode("positive integer", 123, 'i123e');
  testEncode("positive integer", 423, 'i423e');
  testEncode("positive integer", 675, 'i675e');
  testEncode("negative integer", -675, 'i-675e');
}

function testForStrings() {
  console.log(underline('STRINGS'));
  testEncode("numeric string", `123`, '3:123');
  testEncode("greeting message", 'hello', '5:hello');
  testEncode("empty string", '', '0:');
  testEncode("fruit name", 'apple', '5:apple');
  testEncode("special characters", 'special!@#$chars', '16:special!@#$chars');
}

testForIntegers();
testForStrings();
