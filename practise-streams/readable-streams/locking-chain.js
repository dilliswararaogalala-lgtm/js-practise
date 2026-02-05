const encode = data => new TextEncoder().encode(data);

const reader = new ReadableStream({
  start(controller) {
    controller.enqueue(encode("1"));
    controller.enqueue(encode("2"));
    controller.enqueue(encode("3"));
    controller.close();
  },
});

await reader.pipeTo(Deno.stdout.writable);