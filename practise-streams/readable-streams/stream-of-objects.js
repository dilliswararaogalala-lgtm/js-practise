const getObjectsFromStreams = (names) => {
  return new ReadableStream({
    start(_) {
      this.index = 0;
    },

    pull(controller) {
      if (this.index >= names.length) controller.close();
      else {
        const id = this.index;
        const name = names[id];
        controller.enqueue({ id, name });
        this.index++;
      }
    },
  });
};

const reader = getObjectsFromStreams(["Alice", "Bob"]);

for await (const chunk of reader) {
  console.log(chunk);
}
const [reader1, reader2] = getObjectsFromStreams(["Alice", "Bob"]).tee();
for await (const chunk of reader1) {
  console.log(chunk);
}

for await (const chunk of reader2) {
  console.log(chunk);
}

