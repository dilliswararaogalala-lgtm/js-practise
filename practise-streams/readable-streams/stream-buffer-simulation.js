const createReadableStream = (array) => {
  return new ReadableStream({
    start(_) {
      this.index = 0;
    },

    pull(controller) {
      if (this.index >= array.length) controller.close();
      else if (controller.desiredSize > 0) {
        controller.enqueue(array[this.index]);
        this.index++;
      }
    },
  }, { highWaterMark: 3 });
};

const reader = createReadableStream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

for await (const chunk of reader) {
  console.log(chunk);
}
