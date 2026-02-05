import { handleRequest } from "./handlers.js";
import { runServer } from "./server.js";

const main = () => {
  runServer(8000, handleRequest)
}

main();