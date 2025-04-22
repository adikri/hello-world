let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let numbers = input[1].split(" ");

// console.log(numbers);

let output = "";

for(let i = numbers.length - 1; i >= 0; i--){
    if(numbers[i] % 2 === 0){
        output += numbers[i] + " ";
    }
}

console.log(output);