const dbg = (x) => console.log(`${x.url} ${x.method}`);

const addNames = async (request, interns) => {
  const { value } = await request.body.getReader().read();
  const data = JSON.parse(new TextDecoder().decode(value));
  interns.push(data);
  return new Response("I GOT THE DATA", {
    headers: {
      "content-type": "text/plain",
    },
  });
};

const listNames = (_, interns) => {
  const body = JSON.stringify(interns);
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

const deleteNames = async (request, interns) => {
  const { value } = await request.body.getReader().read();
  const nameToSearch = new TextDecoder().decode(value);
  const index = interns.findIndex(({name}) => name === nameToSearch);
  interns.splice(index, 1);
  return new Response("DELETED SUCCESSFULLY", {
    headers: {
      "content-type": "text/plain",
    },
  });
};


export const handleInternsRequest = async (request, interns) => {
  dbg(request);

  const path = new URL(request.url).pathname;

  const responseMap = {
    "/interns": listNames,
    "/interns/delete": deleteNames,
    "/interns/create": addNames,
  }

  if(path in responseMap){
    return await responseMap[path](request, interns);
  }

  return new Response("NOT FOUND", {
    status: 404,
    headers: {
      "content-type": "text/plain",
    },
  });
};
