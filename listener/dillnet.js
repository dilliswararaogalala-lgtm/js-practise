const conn = await Deno.connect({
  port: "8000",
  hostname: "127.0.0.1",
  transport: "tcp",
});

const stringfy = (data, isClosed) => JSON.stringify({ data, isClosed });
const parseJson = (stringfyJson) => JSON.parse(stringfyJson);

const encoder = (data) => new TextEncoder().encode(data);
const decoder = (data) => new TextDecoder().decode(data);
const isClose = (msg) => msg === "exit";

const buffer = new Uint8Array(100);

while (true) {
  const n = await conn.read(buffer);
  const message = decoder(buffer.slice(0, n));
  console.log(message);
  
  const json = parseJson(message);
  console.log(json);
  const response = prompt("enter your message:");
  const isClosed = isClose(response);
  
  await conn.write(encoder(stringfy(response, isClosed)));
}
