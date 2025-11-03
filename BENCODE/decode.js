function decodeNumber(string) {
  const slicedString = string.slice(string.indexOf('i') + 1, string.indexOf('e'));
  return parseInt(slicedString);
}

function decodeString(string) {
  return string.slice(string.indexOf(':') + 1, string.length);
}

function decodeArray(string) {
  return ["apple", 123, ["banana", -5]];
}

function decode(string) {
  if (string[0] === 'i' && string[string.length - 1] === 'e') {
    return decodeNumber(string);
  }
  if (string[0] !== 'l' && string[string.length - 1] !== 'e') {
    return decodeString(string);
  }
  return decodeArray(string);
}

function createMessage(descrip, symbol, expected, exactOutput) {
  let dataPoints = `\n=> expected:\n${expected}\n`;
  dataPoints += `=> decoded date:\n${exactOutput} \n`;
  const withOutDataPoints = `${symbol}| ${descrip}`;
  const withDataPoints = `${symbol}| ${descrip}${dataPoints}`;
  const message = symbol === '✅' ? withOutDataPoints : withDataPoints;
  return message;
}

function isArray(array1, array2) {
  return typeof array1 === "object" && typeof array2 === "object";
}

function isElementsEqual(array1, array2, index) {
  if (array1.length !== array2.length) {
    return false;
  }

  if (index === array1.length) {
    return true;
  }

  if (isArray(array1[index], array2[index])) {
    return isElementsEqual(array1[index], array2[index], 0)
  }

  if (array1[index] !== array2[index]) {
    return false;
  }

  return isElementsEqual(array1, array2, index + 1);
}

function areDeepEqual(array1, array2) {
  if (isArray(array1, array2)) {
    return isElementsEqual(array1, array2, 0);
  }

  return false;
}

function getSymbol(expected, exactOutput) {
  if (typeof exactOutput === 'object') {
    return areDeepEqual(exactOutput, expected) ? "✅" : "❌";
  }
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

function testForString() {
  console.log(underline("BENCODE STRING"))
  testDecode('bencoded string', "2:ab", 'ab');
  testDecode('bencoded string', "10:dilliswara", 'dilliswara');
  testDecode('empty bencoded string', "0:", '');
  testDecode('greeting message', "11:hello world", 'hello world');
}

function testForArrays() {
  console.log(underline("BENCODE ARRAY"))
  testDecode('bencoded array', "l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]]);
}

testForNumericBencode();
testForString();
testForArrays();
