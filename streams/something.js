console.log("1: start");

setTimeout(() => console.log(`2: set time out 1`), 0);

Promise.resolve()
 .then(() => console.log("3: promise 1"))
 .then(() => console.log("4: promise 2"))

async function asyncFunc (){
  console.log("5: async start");

  try{
    await Promise.resolve();
    console.log(`6: After await`);
    throw new Error("oops");
    console.log("7: After throw");
  } catch(e){
    console.log(`8: Caught error`);
    return `caught`;
  } finally {
    console.log(`9: finally block`);
  }

  console.log(`10: after finally`);
}

const result = asyncFunc();

result.then(val => console.log(`11: result: ${val}`));

Promise.resolve().then(() => {
  console.log(`12: Promise 3`);
  setTimeout(() => console.log(`13: setTimeout 2`), 0);
})

console.log(`14: end`);