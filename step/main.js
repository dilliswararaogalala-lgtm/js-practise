import { handleInternsRequest } from "./src/request_handler.js";

const createRequestHandler = (interns) => (request) =>
  handleInternsRequest(request, interns);

const main = () => {
  const interns = [];
  const requestHandler = createRequestHandler(interns)
  Deno.serve({ port: 3000 }, requestHandler);
};

main();


