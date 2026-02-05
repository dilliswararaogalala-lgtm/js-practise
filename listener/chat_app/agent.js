const createConnector = async () => {
  return await Deno.connect({
    port: 8000,
    transport: "tcp",
    hostname: "127.0.0.1",
  });
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const main = async () => {
  const conn = await createConnector();
  const name = prompt("Enter the name: ");
  await conn.write(encoder.encode(name));

  while (true) {
    const buffer = new Uint8Array(1024);
    const bytesRead = await conn.read(buffer);
    await Deno.stdout.write(buffer.slice(0, bytesRead));

    const buff = new Uint8Array(1024);
    const bytes = await Deno.stdin.read(buff);

    const message = decoder.decode(buff.slice(0, bytes));
    const info = JSON.stringify({ name, message });

    await conn.write(encoder.encode(info));
  }
};

main();
