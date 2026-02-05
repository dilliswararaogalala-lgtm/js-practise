const fileNames = ["something.js", "sdfd", "main.js"];

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const processFiles = async (fileNames) => {
  for (const fileName of fileNames) {
    try {
      const file = await Deno.open(fileName, { read: true });

      const transform = new TransformStream({
        transform(chunk, controller) {
          const text = decoder.decode(chunk);
          const processedText = `\n${fileName}\n${text.split("\n").slice(0, 10).join("\n")}\n`;
          controller.enqueue(encoder.encode(processedText));
          controller.terminate();
        },
      });

      await file.readable
        .pipeThrough(transform)
        .pipeTo(Deno.stdout.writable, { preventClose: true });
    } catch {
      const msg = `\n${fileName}\nhead: ${fileName}:No such file or directory\n`;
      Deno.stdout.write(encoder.encode(msg));
    }
  }
};

processFiles(fileNames);
