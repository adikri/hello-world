let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// console.log(input);

let mul3 = 0;
let mul5 = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] % 3 === 0){
        mul3++;
    }
    if(input[i] % 5 === 0){
        mul5++
    }
}

console.log(mul3,mul5);