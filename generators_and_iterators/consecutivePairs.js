// Generate sequences of consecutive pairs
//   [1,2,3,4,5] => [[1,2],[2,3],[3,4],[4,5]]

const consecutivePair = function* (data) {
  for (let index = 0; index < data.length - 1; index++) {
    yield [data[index], data[index + 1]];
  }
};

const ite = consecutivePair([1, 2, 3, 4, 5]);
console.log([...ite]);