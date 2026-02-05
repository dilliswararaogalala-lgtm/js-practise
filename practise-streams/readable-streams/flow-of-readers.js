const reader1 = Deno.stdin.readable.getReader();


while (true) {
  const { value, done } = await reader1.read();
  if (done) break;
  console.log("reader1",value);
}

reader1.releaseLock();

const reader2 = Deno.stdin.readable.getReader();

while (true) {
  const { value, done } = await reader2.read();
  if (done) break;
  console.log("reader2", value);
}