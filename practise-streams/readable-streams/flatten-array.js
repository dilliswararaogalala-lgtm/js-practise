const enjectElementsInStream = (array, controller) => {
  for (const element of array) {
    if (Array.isArray(element)) enjectElementsInStream(element, controller);
    else controller.enqueue(element);
  }
  return;
};

const streamFlatener = (array) => {
  return new ReadableStream({
    start(controller) {
      enjectElementsInStream(array, controller);
      controller.close();
    },
  });
};

const reader = streamFlatener([1, [2, 3], 4]);

for await (const chunk of reader) {
  console.log(chunk);
}
