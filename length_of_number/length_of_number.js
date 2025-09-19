const input = 122341;
let count = 0;
let quotient = input ;
while(quotient > 1){
    quotient = quotient/10 ;
    count++;
}
console.log(input,"has",count,"numbers");
