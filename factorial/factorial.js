const input = 5;
let factorial = 1 ;

for(let positiveIntegers = input ; positiveIntegers !== 0 ; positiveIntegers--){
    factorial = factorial * positiveIntegers;
}
console.log("factorial of",input, ":", factorial);
