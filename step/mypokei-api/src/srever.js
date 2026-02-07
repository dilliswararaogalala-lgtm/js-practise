const dbgRequest = ({ url, method }) => console.log({ url, method });

const extractData = (pokeData) => {
  const abilities = pokeData.abilities.map(({ ability }) => ability.name);
  const moves = pokeData.moves.map(({ move }) => move.name);
  return ({ abilities, moves });
};

const createResponse = async (path) => {
  const response = await fetch(`https://pokeapi.co/api/v2/${path}`);
  const pokeData = await response.json();
  const extractedData = extractData(pokeData);
  return new Response(JSON.stringify(extractedData), {
    headers: {
      "content-type": "application/json",
    },
  });
};

const createFaiureResponse = () => {
  return new Response("NOT FOUND", {
    headers: {
      "content-type": "text/plain",
    },
  });
};
export const handleRequest = async (request) => {
  const pathName = new URL(request.url).pathname;
  dbgRequest(request);

  const path = {
    "/bulbasaur": "pokemon/bulbasaur",
    "/charmander": "pokemon/charmander",
    "/charizard": "pokemon/charizard",
    "/squirtle": "pokemon/squirtle",
  };

  if (pathName in path) {
    return await createResponse(path[pathName]);
  }

  return await createFaiureResponse();
};
