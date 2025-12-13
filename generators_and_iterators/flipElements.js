// Flipped consecutive elements
//   [1,2,3,4] => [2,1,4,3];

const flipElements = function* (data) {
  for (let i = 0; i < data.length; i += 2) {
    yield data[i + 1];
    yield data[i];
  }
};

const iterator = flipElements([1, 2, 3, 4]);
console.log([...iterator]);

