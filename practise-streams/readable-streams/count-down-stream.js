const recursiveStream = (n, controller) => {
  if (n >= 1){
    controller.enqueue(n);
    return recursiveStream(n - 1, controller);
  };
  controller.close();
};

const countDownStream = new ReadableStream({
   start(controller) {
     recursiveStream(3, controller);
  },
});

for await (const chunk of countDownStream) {
  console.log(chunk);
}
