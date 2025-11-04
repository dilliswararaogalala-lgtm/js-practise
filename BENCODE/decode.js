function decodeNumber(string, indexOfI, indexOfE) {
  const slicedString = string.slice(indexOfI + 1, indexOfE);
  return parseInt(slicedString);
}

function decodeString(string, lastIndex) {
  return string.slice(string.indexOf(':') + 1, lastIndex);
}


function decodeTheNumber(string, indexOfI) {
  const data = [];
  for (let index = indexOfI; index < string.length; index++) {
    if (string[index] === 'e') {
      data.push(decodeNumber(string, indexOfI, index));
      data.push(index);
      return data;
    }
  }
}

function isNumber(character) {
  return typeof parseInt(character) === "number"
}

function decodeArray(string) {
  const decodedArray = [];
  let index = 1;
  while (index < string.length) {
    if (string[index] === 'i') {
      const elements = (decodeTheNumber(string, index));
      index = elements[1];
      decodedArray.push(elements[0]);
    }

    index++;
  }

  return decodedArray;
}

function isStartsWithNum(string) {
  const slicedNumber = string.slice(0, string.indexOf(':'));
  return typeof parseInt(slicedNumber) === 'number';
}

function decode(string) {
  if (string.startsWith('i')) {
    return decodeNumber(string, 0, string.indexOf('e'));
  }
  if (string.includes(':') && isStartsWithNum(string)) {
    return decodeString(string, string.length);
  }
  if (string.startsWith('l')) {
    return decodeArray(string);
  }
}

function createMessage(descrip, symbol, expected, exactOutput) {
  let dataPoints = `\n=> expected:\n${expected}\n`;
  dataPoints += `=> decoded data:\n${exactOutput} \n`;
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
  testDecode('greeting message', "11:hello world", 'hello world');
}

function testForArrays() {
  console.log(underline("BENCODE ARRAY"))
  testDecode('bencoded array', "li3ei4ei12ee", [3, 4, 12]);
}

testForNumericBencode();
testForString();
testForArrays();
