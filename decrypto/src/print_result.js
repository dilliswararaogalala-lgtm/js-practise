import { sendMessage } from "./helper.js";

export const printResultMessage = async (secretCode, isRightCode, current, opponet) => {
  if (isRightCode) {
    await sendMessage(opponet, `\n✅ Decrypted successfully!\n`);
    await sendMessage(current, `\n💥 Your code has been decrypted!\n`);
    await sendMessage(
      current,
      `\nYour Current score is ${current.score}\n`,
    );

    await sendMessage(
      opponet,
      `\nYour Current score is ${opponet.score}\n`,
    );
    return;
  }
  
  await sendMessage(
    opponet,
    `\n❌ Decryption failed. actual code is ${secretCode.join("")}\n`,
  );
  
  await sendMessage(current, `\n✅ Your code remains secure!\n`);
  await sendMessage(
    current,
    `\nYour Current score is ${current.score}\n`,
  );
  await sendMessage(
    opponet,
    `\nYour Current score is ${opponet.score}\n`,
  );

  return;
};