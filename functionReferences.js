const lessThan = function (a, b){
  return a < b;
}

const greaterThan = function(a, b){
  return !lessThan(a, b)
}

function sort(data, orderToArrange) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (orderToArrange(data[i], data[j])) {
        const temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
}

console.log(sort([10, 23, 999], lessThan));
console.log(sort([10, 23, 999], greaterThan));

