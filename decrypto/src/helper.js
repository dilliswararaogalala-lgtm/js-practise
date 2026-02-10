export const encoder = new TextEncoder();
export const decoder = new TextDecoder();

export const switchPlayers = (players) => {
  const opponentPlayer = players.current;
  players.current = players.opponent;
  players.opponent = opponentPlayer;
};

export const sendMessage = async ({ conn }, msg) => {
  await conn.write(encoder.encode(msg));
};

export const generateRandomCode = () => {
  const numbers = [1, 2, 3, 4];

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.slice(0, 3);
};
