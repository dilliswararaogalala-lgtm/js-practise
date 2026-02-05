import { search } from "@inquirer/prompts";

const getChoices = async (input) => {
  if (!input) {
    return [];
  }

  const response = await fetch(
    `https://suggestqueries.google.com/complete/search?client=firefox&q=${input}`,
  );
  const data = await response.json();
  return data[1].map((content) => ({ name: content, value: content }));
};

const getChoice = async () => {
  return await search({
    message: "Search",
    source: getChoices,
    pageSize: 5,
  });
};

const extractData = async (query) => {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`,
  );
  return await response.json();
};

const main = async () => {
  const query = await getChoice();
  const { extract } = await extractData(query);
  console.log(`%c ${extract}`, "color: green");
};

main();
