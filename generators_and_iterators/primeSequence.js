// - Prime number series

const isPrime = (x) => {
  const isDivisible = (x, y) => x % y === 0;
  if (x === 1) return false;
  for (let i = 2; i < x; i++) {
    if (isDivisible(x, i)) return false;
  }
  return true;
};

const primeNumberSeries = function* () {
  let i = 1;
  while (true) {
    if (isPrime(i)) yield i;
    i++;
  }
};
