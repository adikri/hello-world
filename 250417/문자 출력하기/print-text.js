let fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let output = "";

for (let i = 0; i < 8; i++){
    output += input;
}

console.log(output);