const createFilteredStream = (listOfNumbers) => {
  return new ReadableStream({
    start(_) {
      this.index = 0;
      this.array = listOfNumbers.filter((num) => num > 10);
    },

    pull(controller) {
      if (this.index >= this.array.length) controller.close();
      else {
        controller.enqueue(this.array[this.index]);
        this.index++;
      }
    },
  });
};

const reader = createFilteredStream([20, 12, 5]);

for await (const number of reader) {
  console.log(number);
}
