let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let output = "";

for(let i = b; i >= a; i--){
    output += i + " ";
}

console.log(output);