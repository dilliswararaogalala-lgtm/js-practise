const streamer = new ReadableStream({
  start(controller){
    controller.enqueue(1);
    console.log("desired value:", controller.desiredSize);
    controller.enqueue(2);
    console.log("desired value:", controller.desiredSize);
    controller.enqueue(3);
    console.log("desired value:", controller.desiredSize);  
    controller.close();
  }
}, {highWaterMark: 2});

const reader = streamer
