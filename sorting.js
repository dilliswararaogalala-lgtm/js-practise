let numberOfTimes = 0;

function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfTimes++;
      if (data[i] < data[j]) {
        const temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
}

function getRandomNumber(lowerValue, upperValue) {
  return lowerValue + Math.floor(Math.random() * upperValue - lowerValue);
}

function getRandomData(numberOfElements) {
  const data = [];
  for (let index = 0; index < numberOfElements; index++) {
    const randomNumber = getRandomNumber(1, 100);
    data.push(randomNumber);
  }
  return data;
}

function getMedian(data) {
  if (data.length % 2 === 0) {
    const middleIndex = data.length / 2;
    return (data[middleIndex] + data[(middleIndex) - 1]) / 2;
  } else {
    return data[(data.length - 1) / 2];
  }
}
function benchMark(numberOfElements) {
  console.log(`${numberOfElements} | ${numberOfTimes}`);
}

function main() {
  const numberOfElements = 3;
  const data = getRandomData(numberOfElements);
  const sortedData = sort(data);
  benchMark(numberOfElements);
  const medianOfData = getMedian(sortedData);
  console.log(`median of the data: ${medianOfData}`);
}

main();
