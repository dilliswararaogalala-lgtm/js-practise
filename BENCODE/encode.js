function encodeIntegers(data) {
  return `i${data}e`;
}

function encodeString(data) {
  return `${data.length}:${data}`;
}

function formatEncodedArray(encodedData) {
  return `l${encodedData}e`;
}

function encodeArray(data) {
  const encodedArray = [];
  for (let index = 0; index < data.length; index++) {
    encodedArray.push(encode(data[index]));
  }
  return formatEncodedArray(encodedArray.join(''));
}

function encode(data) {
  const typeOfData = typeof data;
  switch (typeOfData) {
    case 'number':
      return encodeIntegers(data);
    case 'string':
      return encodeString(data);
    case 'object':
      return encodeArray(data);
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

function testForArrays() {
  console.log(underline('ARRAYS'));
  testEncode("array with numbers", [1, 2], 'li1ei2ee');
  testEncode("array with character", ['a'], 'l1:ae');
  testEncode("array with characters", ['a', 'b'], 'l1:a1:be');
  testEncode("multiple array", ['a', 'b', ['c']], 'l1:a1:bl1:cee');
  testEncode("multiple array", ["", 0, []], "l0:i0elee");
  testEncode("multiple array", [0, "", ["test"]], "li0e0:l4:testee");
  testEncode("multiple array", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function testAll() {
  testForIntegers();
  testForStrings();
  testForArrays();
}

testAll();
