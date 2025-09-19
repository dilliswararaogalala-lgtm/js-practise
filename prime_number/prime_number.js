const input = 97;
let factor = 0;
for(let counter = 1; counter <= input; counter++){
   if(input % counter === 0){
      factor++;
   }
}
const primeNumber = (factor === 2) ? "is a prime number" : "is not a prime number";
console.log(input,primeNumber);
