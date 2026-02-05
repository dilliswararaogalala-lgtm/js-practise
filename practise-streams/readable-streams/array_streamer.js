const fruits = ["Apple", "Banana", "Cherry"];

const createArrayStream = (fruits) => {
  return new ReadableStream({
    start(controller) {
      for (const fruit of fruits) {
        controller.enqueue(fruit);
      }
      controller.close();
    },
  });
};

const reader = createArrayStream(fruits)

for await (const chunk of reader) {
  console.log(chunk);
}