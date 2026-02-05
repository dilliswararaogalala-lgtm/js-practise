const createSecretCode = new TransformStream({
  transform(chunk, controller) {
    const secretCode = chunk.replaceAll("a", "@");
    controller.enqueue(secretCode);
  },

  flush(controller) {
    controller.enqueue("Encryption Complete");
  },
});

const writer = new WritableStream({
  write(chunk) {
    Deno.stdout.write(chunk);
  },
});

await Deno.stdin.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(createSecretCode)
  .pipeThrough(new TextEncoderStream())
  .pipeTo(writer)
