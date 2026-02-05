const writableStream = Deno.stdout.writable;
const writer = writableStream.getWriter();

const encoder = new TextEncoder();
const message = encoder.encode("Hello from the writable stream!\n");

// We "write" the chunk to the stream
await writer.write(message);

// Always release the lock when done
writer.releaseLock();