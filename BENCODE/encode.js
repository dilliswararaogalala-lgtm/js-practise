function encode() {
  return 'i123e';
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

testEncode("positive integer", '123', 'i123e');
