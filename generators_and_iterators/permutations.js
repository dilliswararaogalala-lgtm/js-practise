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