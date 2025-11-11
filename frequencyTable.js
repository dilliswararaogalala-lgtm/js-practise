const frequencytable = (table, currentElement) => {
  if (!(currentElement in table)) {
    table[currentElement] = 0;
  }
  table[currentElement]++;
  return table;
};

[1, 2, 3, 3, 2].reduce(frequencytable, {});
