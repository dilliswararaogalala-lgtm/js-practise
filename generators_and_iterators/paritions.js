// partition by
//   identity: [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]
//   isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]]
const partition1 = function* (data) {
  let partition = [data[0]];
  for (let index = 0; index < data.length; index++) {
    if (partition.includes(data[index + 1])) {
      partition.push(data[index + 1]);
    } else {
      yield partition;
      partition = [data[index + 1]];
    }
  }
};

const isEven = (x) => x % 2 === 0;
const isOdd = (x) => x % 2 !== 0;

const isBothSame = (x, y, predicate) => predicate(x) && predicate(y);

const partition2 = function* (data) {
  let partition = [data[0]];
  for (let index = 0; index < data.length; index++) {
    if (
      isBothSame(data[index], data[index + 1], isEven) ||
      isBothSame(data[index], data[index + 1], isOdd)
    ) {
      partition.push(data[index + 1]);
    } else {
      yield partition;
      partition = [data[index + 1]];
    }
  }
};

const iterat = partition2([1, 3, 1, 2, 2, 1, 1, 3, 5, 2]);
const iter = partition1([1, 1, 1, 2, 2, 1, 1, 3, 3, 2]);

console.log([...iterat])
console.log([...iter])
