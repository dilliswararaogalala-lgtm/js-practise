import { generateRandomCode, sendMessage, switchPlayers } from "./helper.js";
import { readCode, readHints } from "./players_side.js";
import { printResultMessage } from "./print_result.js";

const isCorrectCode = (actualCode, guessedCode, opponent) => {
  if (actualCode.join("") === guessedCode.join("")) {
    opponent.score += 1;
    return true;
  }

  return false;
};

const announceWinner = async ({ current, opponent }) => {
  await sendMessage(opponent, "\nYOU HAVE WON THE GAME 🥳\n");
  await sendMessage(current, "\nYOU HAVE LOSE THE GAME 😤\n");
  return;
};

export const startTheGame = async ([current, opponent]) => {
  const players = { current, opponent };

  while (true) {
    const { current, opponent } = players;
    const secretCode = generateRandomCode();
    const hints = await readHints(current, opponent, secretCode);
    const code = await readCode(current, opponent, hints);
    const isCodeCorrect = isCorrectCode(secretCode, code, opponent);
    if (opponent.score === 2) break;
    await printResultMessage(secretCode, isCodeCorrect, current, opponent);
    switchPlayers(players);
  }

  await announceWinner(players);
  return;
};
