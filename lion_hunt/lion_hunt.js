const testCase= "L      Z"
let emptyLand = 0;
let index  = 0;
let length = testCase.length;
if(testCase[index] === "L" ){
    index = index+1;
    if(testCase[index] !== "Z" && index <= length){
        emptyLand++;
    }
    index = index+1;
    
    if(testCase[index] !== "Z" && index <= length){
        emptyLand++;
    }
    index = index+1;
    
    if(testCase[index] !== "Z" && index <= length){
        emptyLand++;
    }
    index = index+1;
    
    if(testCase[index] !== "Z" && index <= length){
        emptyLand++;
    } 
    index = index+1;
    
    if(testCase[index] !== "Z" && index <= length){
        emptyLand++;
    }
    index = index + 1;

    if(testCase[index] !== "Z" && index <= length){
        emptyLand++;
    }
    index = index + 1;
    
}
console.log("empty patch between lion and zebra :",emptyLand);
