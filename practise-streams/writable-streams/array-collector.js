const reader = Deno.stdin.readable

const decode = data => new TextDecoder().decode(data);

const writer = new WritableStream({
  start(_){
    this.array = [];
  },

  write(chunk){
    this.array.push(decode(chunk));
  },

  close(){
    console.log(this.array);
  }
})

await reader.pipeTo(writer);