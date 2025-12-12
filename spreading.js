const add = (x, y) => {
  console.log(x, y);
  return x+y;
}

const testCases = {
  fnDescrip: 'sum of two numbers',
  fnToHappen: add,
  inputs: [2, 3],
  expecetd: 5
}

testCases.fnToHappen(...testCases.inputs);
