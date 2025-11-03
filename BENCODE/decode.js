function decodeNumber(string) {
  return parseInt(string.slice(1, string.length - 1));
}

function decodeString(string) {
  return string.slice(string.indexOf(':') + 1, string.length);
}

function decode(string) {
  if (string[0] === 'i' && string[string.length - 1] === 'e') {
    return decodeNumber(string);
  }
  if (string.includes(':')) {
    return decodeString(string);
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

function testForStringBencode() {
  console.log(underline("BENCODE"))
  testDecode('bencoded string', "2:ab", 'ab');
  testDecode('bencoded string', "10:dilliswara", 'dilliswara');
  testDecode('empty bencoded string', "0:", '');
  testDecode('greeting message', "11:hello world", 'hello world');
}

testForNumericBencode();
testForStringBencode();
