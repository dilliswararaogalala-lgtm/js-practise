// chunk
//   2: [1,2,3,4] => [[1,2],[3,4]];
//   3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
//   3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

const chunks = function* (data, sizeOfEachChunk, common = 0) {
  let chunk = [];
  let i = 0;
  while (i < data.length) {
    chunk.push(data[i]);
    if (chunk.length === sizeOfEachChunk) {
      yield chunk;
      chunk = [];
    }
    i++;
  }
  if (chunk.length > 0) yield chunk;
};

const iterator = chunks([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log([...iterator]);
