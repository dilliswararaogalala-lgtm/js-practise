function decodeNumber(string) {
  return parseInt(string.slice(1, string.length - 1));
}

function decode(string) {
  let typeOfBencodedStr = '';
  if (string[0] === 'i' && string[string.length - 1] === 'e') {
    return decodeNumber(string);
  }
}

function createMessage(descrip, symbol, expected, exactOutput) {
  let dataPoints = `\n=> expected:\n${expected}\n`;
  dataPoints += `=> decoded date:\n${exactOutput} \n`;
  const withOutDataPoints = `${symbol}| ${descrip}`;
  const withDataPoints = `${symbol}| ${descrip}${dataPoints}`;
  const message = symbol === "✅" ? withOutDataPoints : withDataPoints;
  return message;
}

function getSymbol(expected, exactOutput) {
  return expected === exactOutput ? "✅" : "❌";
}

function testDecode(descrip, bencodedString, expected) {
  const decodedData = decode(bencodedString);
  const symbol = getSymbol(expected, decodedData);
  const message = createMessage(descrip, symbol, expected, decodedData);
  console.log(message);
}

function repeatChar(char, noOfTimes) {
  return char.repeat(noOfTimes);
}

function underline(string) {
  return `\n${string}\n${repeatChar("-", string.length)}\n`
}

function testForNumericBencode() {
  console.log(underline("NUMERIC BENCODE"))
  testDecode('numeric bencoded string', "i123e", 123);
  testDecode('numeric bencoded string', "i321e", 321);
  testDecode('numeric bencoded string', "i-67e", -67);
  testDecode('numeric bencoded string', "i0e", 0);
}

testForNumericBencode();
