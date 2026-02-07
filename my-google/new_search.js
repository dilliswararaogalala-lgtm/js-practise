import { search } from "@inquirer/prompts";

const data = ["name", "age", "something"];

const responses = (input) => data.map((query) => ({ name: query, value: query }));

const getChoice = async () => {
  return await search({
    message: "Search",
    source: responses,
    pageSize: 5,
  });
};

console.log(await getChoice())