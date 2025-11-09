const numbers = [6, 5, 1, 7]

const topElements = (best, current) => {
  let max1 = best[0];
  let max2 = best[1];

  if(max1 < current){
    return [current, max1]
  }
  if (max2 < current) {
    return [max1, current]
  }
  return best
}

const top2Elements = numbers.reduce(topElements, [-Infinity, -Infinity]);
console.log(top2Elements);
