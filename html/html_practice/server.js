const decoder = new TextDecoder();
const encoder = new TextEncoder();

const dilli = Deno.readTextFileSync("./dilli.html");
const karthik = Deno.readTextFileSync("./karthik.html");
const jayanth = Deno.readTextFileSync("./jayanth.html");
const greeting = Deno.readTextFileSync("./greeting.html");

const parseRequest = (message) => {
  const [requestLine] = message.split("\r\n");
  const [method, path, headers] = requestLine.split(" ");
  return { method, path, headers };
};

const readRequest = async (conn) => {
  const buffer = new Uint8Array(1024);
  const bytesRead = await conn.read(buffer);
  const message = decoder.decode(buffer.slice(0, bytesRead)).trim();
  return parseRequest(message);
};

const createResponseLine = () => "HTTP/1.1 200 OK";
const createHeaders = (headers) => {
  return Object.entries(headers)
    .map(([name, value]) => `${name}: ${value}`)
    .join("\r\n");
};

const createNotFoundResponse = () => {
  return `HTTP/1.1 404 NOT FOUND\r\nContent-Type: text/html\r\n\r\n<h3>NOT FOUND</h3>`;
};

const createSuccessResponse = (content) => {
  const headers = {
    "Content-Type": "text/html",
    "Content-Length": content.length,
    "Date": new Date(),
    "Batch": "step-batch-11",
  };
  const response = [
    createResponseLine(),
    createHeaders(headers),
    "",
    content,
  ].join("\r\n");

  return response;
};

const handleConn = async (conn) => {
  const { method, path, headers } = await readRequest(conn);
  console.log(`Method: ${method}, path: ${path}, headers: ${headers}`);
  if (path === "/greeting.html" || path === "/") {
    await conn.write(encoder.encode(createSuccessResponse(greeting)));
  } else if (path === "/dilli.html") {
    await conn.write(encoder.encode(createSuccessResponse(dilli)));
  } else if (path === "/jayanth.html") {
    await conn.write(encoder.encode(createSuccessResponse(jayanth)));
  } else if (path === "/karthik.html") {
    await conn.write(encoder.encode(createSuccessResponse(karthik)));
  } else {
    await conn.write(encoder.encode(createNotFoundResponse()));
  }

  await conn.close();
};

const runServer = async () => {
  const listener = Deno.listen({
    transport: "tcp",
    port: 8000,
  });

  console.log("Server running https://localhost:8000");
  for await (const conn of listener) {
    handleConn(conn);
  }
};

runServer();
