const words = ["Streaming", "is", "powerful", "and", "efficient."];

const readableStream = new ReadableStream({
  // The 'start' method is called immediately when the stream is created
  start(controller) {
    console.log("--- Stream Started ---");
  },

  // The 'pull' method is called repeatedly whenever the stream's queue isn't full
  async pull(controller) {
    if (words.length > 0) {
      const word = words.shift();
      
      // Simulate a delay (e.g., waiting for data from a network)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Send the data into the stream
      controller.enqueue(word + " ");
    } else {
      // Close the stream when there is no more data
      controller.close();
      console.log("\n--- Stream Finished ---");
    }
  },

  // The 'cancel' method is called if the consumer stops reading
  cancel() {
    console.log("Stream was cancelled by the user.");
  }
});

// To consume the stream, we can use a "for await...of" loop
for await (const chunk of readableStream) {
  // We write directly to stdout to see the words appear one by one
  Deno.stdout.write(new TextEncoder().encode(chunk));
}