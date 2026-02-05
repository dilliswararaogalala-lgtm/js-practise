const checkDataStream = (data) => {
  return new ReadableStream({
    start(controller) {
      this.index = 0;
      if (!Array.isArray(data)) controller.error(`Data must be an array`);
    },

    pull(controller) {
      if (this.index >= data.length) controller.close();
      else {
        controller.enqueue(data[this.index]);
        this.index++;
      }
    },
  });
};

const reader = checkDataStream([12, 34, 56]);

for await (const numbers of reader) {
  console.log(numbers);
}
