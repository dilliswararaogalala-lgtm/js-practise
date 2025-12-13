// Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

const iteratorOverLines = function* (data) {
  let i = 0;
  while (true) {
    const index = data.indexOf("\n", i + 1);
    if (index === -1) {
      yield data.slice(i);
      break;
    }
    yield data.slice(i, index);
    i = index + 1;
  }
};

const iter = iteratorOverLines("this\nis\ngood");
console.log([...iter]);