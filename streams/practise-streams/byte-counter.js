// const reader = Deno.stdin.readable.getReader();
// const decoder = new TextDecoder();

// let bytes = 0;

// while(true){
//   const {value, done} = await reader.read();
//   bytes += decoder.decode(value).length;
//   if(done) break;
// }

// console.log("total bytes: ", bytes);

const reader = Deno.stdin.readable.getReader();
const decoder = new TextDecoder();

let bytes = 0;

while(true){
  const {value, done} = await reader.read();
  console.log(value);
  break;
}

console.log("total bytes: ", bytes);