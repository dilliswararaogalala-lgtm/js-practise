const readTextContent = (path) => Deno.readTextFileSync(path);

const createResponseLine = (protocol, statusCode, msg) =>
  `${protocol} ${statusCode} ${msg}`;

const createResponse = (path, protocol, statusCode, msg) => {
  const content = readTextContent(path);
  const response = {
    headers: {
      "content-type": "text/html",
      "content-length": content.length,
    },
  };
  response.body = content;
  response.responseLine = createResponseLine(protocol, statusCode, msg);
  return response;
};

export const handleRequest = ({ path, protocol }) => {
  const paths = {
    "/": "./greeting.html",
    "/greeting": "./greeting.html",
    "/dilli": "./dilli.html",
    "/karthik": "./karthik.html",
    "/jayanth": "./jayanth.html",
  };

  if((path in paths)){
    return createResponse(paths[path], protocol, 200, "OK")
  }

  return createResponse("./error.html", protocol, 404, "NOT OKAY")
};
