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

const data = getRandomData(10);
const sortedData = sort(data);

for (let index = 0; index < sortedData.length; index++) {
  console.log(sortedData[index]);
}

console.log(`number of times:${numberOfTimes}`);
