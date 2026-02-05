const transformer = new TransformStream({
  start(_) {
    this.count = 0;
  },

  transform(_) {
    this.count++;
  },

  flush(controller) {
    controller.enqueue(`Total words: ${this.count}`);
  },
});

const writer = new WritableStream({
  write(chunk) {
    Deno.stdout.write(chunk);
  },
});

await Deno.stdin.readable
  .pipeThrough(transformer)
  .pipeThrough(new TextEncoderStream())
  .pipeTo(writer);
