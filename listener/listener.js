const listener = Deno.listen({
  port: 8000,
  transport: "tcp",
});

const encoder = (data) => new TextEncoder().encode(data);
const decoder = (data) => new TextDecoder().decode(data);

const interval = () => {
  let i = 1;
  return setInterval(() => {
    console.clear();
    console.log(`searhing ${(".").repeat(i)}`);
    i = i % 3;
    i++;
  }, 300);
};

const set = interval();

const stringfy = (data, isClosed) => JSON.stringify({ data, isClosed });
const parser = (stringfyJson) => JSON.parse(stringfyJson);

const isClose = (msg) => msg === "exit";

async function handleConnection(conn) {
  console.log("Connect established");
  const buffer = new Uint8Array(128);

  while (true) {
    const message = prompt("Enter your msg:");
    const isClosed = isClose(message);
    await conn.write(encoder(stringfy(message, isClosed)));
    const n = await conn.read(buffer);
    const response = decoder(buffer.slice(0, n));
    const json = parser(response);
    console.log(json);
  }
}


for await (const conn of listener) {
  console.clear();
  clearInterval(set);
  await handleConnection(conn);
}



