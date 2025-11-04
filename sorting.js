function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] < data[j]) {
        const temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
}

const data = [5, 10, 22, 10];
const sortedData = sort(data);

for (let index = 0; index < sortedData.length; index++) {
  console.log(sortedData[index]);
}
