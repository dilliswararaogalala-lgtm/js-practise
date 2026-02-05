const reader = new ReadableStream({
  start(controller){
    controller.enqueue("First message");
    setTimeout(() => {
      controller.enqueue("second message");
      controller.close();
    }, 2000)
  }
})

for await (const chunk of reader) {
  console.log(chunk);
}