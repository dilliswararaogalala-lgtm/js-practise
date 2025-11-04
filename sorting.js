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
  const sortedData = sort(data);
  console.log(sortedData);
  return sortedData[Math.floor(sortedData.length / 2)];
}

function main() {
  const numberOfElements = 6;
  const data = getRandomData(numberOfElements);
  const medianOfData = getMedian(data);
  console.log(`median of the data: ${medianOfData}`);
}

main();
