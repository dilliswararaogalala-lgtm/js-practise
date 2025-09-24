const originalString = "hello";
let reverseString = "";
const lengthOfString = originalString.length;

for(let index = lengthOfString-1; index >= 0; index--){
  reverseString = reverseString + originalString[index]
}

console.log(reverseString);
