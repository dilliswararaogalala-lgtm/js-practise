// partition by
//   identity: [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]
//   isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]]

const partition = function* (data, shouldBeGroup) {
  let partition = [data[0]];
  for (let index = 0; index < data.length; index++) {
    if (shouldBeGroup(data[index], data[index + 1])) {
      partition.push(data[index + 1]);
    } else {
      yield partition;
      partition = [data[index + 1]];
    }
  }
};

const sameIdentity = (a, b) => a === b;
const sameGroup = (a, b) => (a % 2) === (b % 2);

const iterator = partition([1, 3, 1, 2, 2, 1, 1, 3, 5, 2], sameGroup);
const iterator1 = partition([1, 1, 1, 2, 2, 1, 1, 3, 3, 2], sameIdentity);
console.log([...iterator]);
console.log([...iterator1]);
