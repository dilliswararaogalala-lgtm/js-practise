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
  for (let index = 0; index < data.length; index++) {
    yield [data[index], data[index] + 1];
  }
};

const ite = consecutivePair([1, 2, 3, 4, 5]);
console.log([...ite]);

// Generate a cycle of elements
//   [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]

// Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

const iteratorOverLines = function* (data) {
  let sentence = "";
  for (let index = 0; index < data.length; index++) {
    if(data[index] === "\n") {
      yield sentence;
      sentence = ""
    } else {
      sentence += data[index];
    }
  }
  if(sentence.length > 0) yield sentence;
};

const iter = iteratorOverLines("this\nis\ngood");
console.log([...iter]);

