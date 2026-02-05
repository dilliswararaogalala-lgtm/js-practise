const connections = [];

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const createListener = () => {
  return Deno.listen({
    port: 8000,
    transport: "tcp",
  });
};

const sendMessageToAll = async (message, name, conn) => {
  const formatedMessage = `\t\t\t${name}: ${message}\n`;
  for (const connection of connections) {
    if (connection !== conn) {
      await connection.write(encoder.encode(formatedMessage));
    }
  }
};

const handleConn = async (conn, name) => {
  while (true) {
    const buffer = new Uint8Array(1024);
    const bytesRead = await conn.read(buffer);
    const message = decoder.decode(buffer.slice(0, bytesRead)).trim();
    await sendMessageToAll(message, name, conn);
  }
};

const main = async () => {
  const listener = createListener();
  for await (const conn of listener) {
    const buffer = new Uint8Array(1024);
    await conn.write(encoder.encode("Enter you name:"));
    const bytesRead = await conn.read(buffer);
    const name = decoder.decode(buffer.slice(0, bytesRead)).trim();
    connections.push(conn);
    handleConn(conn, name);
  }
};

main();
