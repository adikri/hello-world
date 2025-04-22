let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let elements = input[1].split(" ");

let output = "";
for (let i = 0; i < n; i++){
    output += elements[i]*elements[i] + " ";
}

console.log(output);