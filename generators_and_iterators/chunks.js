// chunk
//   2: [1,2,3,4] => [[1,2],[3,4]];
//   3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
//   3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

const chunks = function* (data, sizeOfEachChunk, common = 0) {
  let index = 0;
  while (index < data.length) {
    const chunks = [];
    let count = 0;
    while (count < sizeOfEachChunk) {
      if (data[index] !== undefined) chunks.push(data[index]);
      count++;
      index++;
    }
    index -= common;
    yield chunks;
    if (chunks[2] === data[data.length - 1]) break;
  }
};

const iterator = chunks([1, 2, 3, 4, 5, 6, 7], 4, 3);
console.log([...iterator]);
