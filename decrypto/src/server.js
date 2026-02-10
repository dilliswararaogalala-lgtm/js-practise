import { startTheGame } from "./game_logic.js";
import { decoder, encoder } from "./helper.js";

const createListener = (port) => {
  return Deno.listen({ port, transport: "tcp" });
};

const players = [];

const player1Words = ["Scotland", "England", "West Indies", "Nepal"];
const player2Words = ["South Africa", "Afganisthan", "New Zealand", "UAE"];

const commandInput = async (conn) => {
  await conn.write(encoder.encode("ENTER YOUR NAME: "));
  const buffer = new Uint8Array(1024);
  const n = await conn.read(buffer);
  return decoder.decode(buffer.subarray(0, n)).trim();
};

const handleConn = async (conn) => {
  console.log(`SERVER LISTENING TO 8000`);
  const name = await commandInput(conn);
  const words = players.length === 0 ? player1Words : player2Words;
  players.push({ name, conn, words, score: 0, hasWon: false });

  if (players.length === 2) {
    await startTheGame(players);
    players.forEach(async ({ conn }) => await conn.close());
  }
};

const main = async () => {
  const listener = createListener(8000);
  for await (const conn of listener) {
    if (players.length === 2) {
      await conn.write(encoder.encode("GAME IS ALREADY STARTED\n"));
      await conn.close();
      continue;
    }

    handleConn(conn);
  }
};

main();
