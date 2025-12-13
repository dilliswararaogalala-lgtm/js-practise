// - Generate all pair permutations
//   [1,2,3,4,5] => [[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],...]

const permutations = function* (data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      yield [data[i], data[j]];
    }
  }
};

const iterator = permutations([1, 2, 3, 4, 5]);
console.log([...iterator]);

// Generate sequences of consecutive pairs
//   [1,2,3,4,5] => [[1,2],[2,3],[3,4],[4,5]]

const consecutivePair = function* (data) {
  for (let index = 0; index < data.length - 1; index++) {
    yield [data[index], data[index + 1]];
  }
};

const ite = consecutivePair([1, 2, 3, 4, 5]);
console.log([...ite]);

// Generate a cycle of elements
//   [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]
const cycleOfElements = function* (data) {
  while (true) {
    for (const number of data) {
      yield number;
    }
  }
};

//const iterator = cycleOfElements([1,2,3,4,5])
// Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

const iteratorOverLines = function* (data) {
  let i = 0;
  while (true) {
    const index = data.indexOf("\n", i + 1);
    if (index === -1) {
      yield data.slice(i);
      break;
    }
    yield data.slice(i, index);
    i = index + 1;
  }
};

const iter = iteratorOverLines("this\nis\ngood");
console.log([...iter]);

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
