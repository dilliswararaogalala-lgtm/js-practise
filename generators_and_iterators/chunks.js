// chunk
//   2: [1,2,3,4] => [[1,2],[3,4]];
//   3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
//   3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

const chunks = function* (data, noOfChunks, common = 0) {
  let i = 0;
  while (i < data.length) {
    const chunks = [];
    let index = 0;
    while (index < noOfChunks) {
      if (data[i] !== undefined) chunks.push(data[i]);
      index++;
      i++;
    }
    i -= common;
    yield chunks;
    if (chunks[2] === data[data.length - 1]) break;
  }
};

const iterator = chunks([1, 2, 3, 4, 5, 6, 7], 3, 1);
console.log([...iterator]);
