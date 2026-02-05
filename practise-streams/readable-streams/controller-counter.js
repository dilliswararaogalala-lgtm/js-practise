const counter = () => {
  return new ReadableStream({
    start(_) {
      this.value = 1;
    },

    pull(controller) {
      if (this.value > 5) controller.close();
      else controller.enqueue(this.value++);
    },
  });
};

const reader = counter();

for await (const number of reader) {
  console.log(number);
}
