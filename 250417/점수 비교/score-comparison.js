let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
// console.log(input);
let aScore = input[0].split(" ");
let bScore = input[1].split(" ");
// console.log(aScore,bScore);
let aMathScore = Number(aScore[0]);
let aEnglishScore = Number(aScore[1]);
let bMathScore = Number(bScore[0]);
let bEnglishScore = Number(bScore[1]);
// console.log(aMathScore,aEnglishScore,bMathScore,bEnglishScore);

if(aMathScore > bMathScore && aEnglishScore > bEnglishScore){
    console.log(1);
}else{
    console.log(0);
}