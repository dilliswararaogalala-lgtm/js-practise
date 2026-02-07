import { handleRequest } from "./src/srever.js";

const main = () => {
  Deno.serve(handleRequest);
}

main();