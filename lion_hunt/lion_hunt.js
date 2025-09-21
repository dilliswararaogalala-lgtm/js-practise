const testCase1 = "LZ";
const testCase2 = "L Z ";
const testCase3 = "L ZL";
const testCase4 = "L   Z  L Z";
const testCase5 = "L  Z L Z";
const testCase6 = "L     L";
const testCase7 = "Z   Z   Z";
const testCase8 = "    Z   L";
const testCase9 = "L  L Z  L"
const testCase10 = "    ";
const testCase11 = "L   ZZ  L";
const testCase12 = "Z   LL Z";
const testCase13 = "  L  Z L";
const testCase14 = "L  Z LL  ";
const testCase15 = `"L  ZL Z"`;


const testCasetoUse = testCase15
let lionsLocation = 0;
let zebrasLocation = 0;
let spaceBetween = 0;
let spaceForHunt = 0;
let repeat = true;

let length = testCasetoUse.length;

for (let index = 0; index < length; index++) {
    if (testCasetoUse[index] === "L") {
        lionsLocation = index;
    }

    if (testCasetoUse[index] === "Z") {
        zebrasLocation = index;
    }

    spaceBetween = (lionsLocation < zebrasLocation) ? (zebrasLocation - lionsLocation) : (lionsLocation - zebrasLocation);

    if (spaceBetween !== 0 && repeat) {
        spaceForHunt = spaceBetween;
        repeat = false;
    }

    if (spaceBetween < spaceForHunt) {
        spaceForHunt = spaceBetween;
    }
    
    if (index === length - 1) {
        if (index < 2) {
            if (testCasetoUse[0] === testCasetoUse[index]) {
                spaceForHunt = 0;
            }
            break;
        }
        if (spaceBetween === length - 1) {
            if (testCasetoUse[0] === testCasetoUse[index]) {
                spaceForHunt = 0;
            } else if (spaceBetween === lionsLocation && testCasetoUse[0] === "L" && zebrasLocation === 0) {
                spaceForHunt = 0;
            }
        }


    }
}
console.log("input:", testCasetoUse, "output:", spaceForHunt - 1);
