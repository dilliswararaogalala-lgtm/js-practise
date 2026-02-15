const decoder = new TextDecoder();

const readImageFile = async (fileName) => {
  return await Deno.readFile(`./images/${fileName}`);
};

const parser = (content) => {
  
}

const main = async () => {
  const args = Deno.args;
  const content =  await readImageFile(args[0]);
  parser(content);
};

main();