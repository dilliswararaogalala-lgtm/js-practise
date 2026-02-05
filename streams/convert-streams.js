const fileNames = ["ads"];
const encoder = new TextEncoder();

const readableStream = new ReadableStream({
  start(controller) {
    this.fileIndex = 0;
  },

  async pull(controller) {
    if (this.fileIndex >= fileNames.length) {
      controller.close();
      return;
    }

    const fileName = fileNames[this.fileIndex];

    try {
      const content = await Deno.readFile(fileName);
      controller.enqueue(content);
      this.fileIndex++;
    } catch {
      const msg = `head: ${fileName}: No such file or directory`;
      controller.enqueue(encoder.encode(msg));
      this.fileIndex++;
    }
  },
});

readableStream.pipeTo(Deno.stdout.writable);
