// Generate a cycle of elements
//   [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]
const cycleOfElements = function* (data) {
  while (true) {
    for (const number of data) {
      yield number;
    }
  }
};

const iterator = cycleOfElements([1,2,3,4,5]);
console.log([...iterator]);