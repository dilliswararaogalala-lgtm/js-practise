const decoder = new TextDecoder();
const encoder = new TextEncoder();

const parseRequest = (request) => {
  const [requestLine] = request.split("\r\n");
  const [method, path, protocol] = requestLine.split(" ");
  return { method, path, protocol };
};

const readAndParseRequest = async (conn) => {
  const buffer = new Uint8Array(1024);
  const bytesRead = await conn.read(buffer);
  const request = decoder.decode(buffer.slice(0, bytesRead)).trim();
  return parseRequest(request);
};

const createHeaders = (headers) => {
  return Object.entries(headers)
    .map(([name, value]) => `${name}: ${value}`)
    .join("\r\n");
};

const createResponse = (response) => {
  const { responseLine, body } = response;
  const headers = createHeaders(response.headers);
  return [responseLine, headers, "", body].join("\r\n");
};

const writeResponse = async (conn, response) => {
  await conn.write(encoder.encode(response));
};

const handleConn = async (conn, handleRequest) => {
  const request = await readAndParseRequest(conn);
  console.log(request);
  const reponse = handleRequest(request);
  const formattedResponse = createResponse(reponse);
  await writeResponse(conn, formattedResponse);
  await conn.close();
};

export const runServer = async (port, handleRequest) => {
  const listener = Deno.listen({
    transport: "tcp",
    port,
  });

  console.log("Server running https://localhost:8000");
  for await (const conn of listener) {
    handleConn(conn, handleRequest);
  }
};
