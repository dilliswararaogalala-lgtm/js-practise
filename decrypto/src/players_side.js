import { decoder, encoder, sendMessage } from "./helper.js";

const getInputs = async ({ conn }, descrip) => {
  const inputs = [];
  for (let i = 1; i <= 3; i++) {
    const buffer = new Uint8Array(1024);
    await conn.write(encoder.encode(`\nEnter ${descrip} No ${i}: `));
    const n = await conn.read(buffer);
    inputs.push(decoder.decode(buffer.subarray(0, n)).trim());
  }

  return inputs;
};

const formatter = (descrip, hints) => {
  return `\n${descrip} are: \n${hints.join(" | ")}\n`;
};

const sendHints = async ({ conn }, hints) => {
  const formattedHints = formatter("Hints", hints);
  await sendMessage({ conn }, formattedHints);
};

export const readHints = async (
  currentPlayer,
  opponentPlayer,
  secretCode,
) => {
  await sendMessage(
    opponentPlayer,
    `\n ⚔️ Opponent is setting up hints. Get ready.\n`,
  );

  await sendMessage(
    currentPlayer,
    formatter("Words", currentPlayer.words),
  );

  await sendMessage(
    currentPlayer,
    `\nYour Secret Code is ${secretCode.join("")}`,
  );

  return await getInputs(currentPlayer, "Clue");
};

export const readCode = async (
  currentPlayer,
  opponentPlayer,
  hints,
) => {
  await sendHints(opponentPlayer, hints);

  await sendMessage(
    currentPlayer,
    `\n ⚔️ Opponent is attempting to break your code!\n`,
  );

  return await getInputs(opponentPlayer, "Code");
};
