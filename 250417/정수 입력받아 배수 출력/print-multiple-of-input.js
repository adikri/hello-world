let fs = require("fs");

let input = Number(fs.readFileSync(0).toString().trim());

let output = "";
for (let i = 1; i <= 5; i++){
    output += input*i + " ";
}

console.log(output);