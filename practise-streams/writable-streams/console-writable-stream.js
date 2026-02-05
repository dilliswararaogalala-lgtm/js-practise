const myWritableStream = new WritableStream({
  write(chunk) {
    console.log("Writing to sink:", chunk);
  },
  close() {
    console.log("Stream closed successfully.");
  }
});

// To use it, you need a writer
const writer = myWritableStream.getWriter();

await writer.write("Hello");
await writer.write("World");
await writer.close();

