const testCase = "Z  L"
let emptyLand = 0;
let index = 0;
let length = testCase.length;

if(testCase[0] === "L"){
    for(let index = 1; index <= length - 1; index++ ){
        if(testCase[index] !== "Z"){
            emptyLand++;
        }
    }
}else if(testCase[0] === "Z"){
   for(let index = 1; index <= length - 1; index++ ){
        if(testCase[index] !== "L"){
            emptyLand++;
        }
    } 
}

console.log("empty patch between lion and zebra or Zebra and lion :", emptyLand);
