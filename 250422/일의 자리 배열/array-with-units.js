let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let first = Number(input[0]);
let second = Number(input[1]);

let output = first + " " + second + " ";
// console.log(output);

let sum = 0;
for(let i = 0; i < 8; i++){
    sum = (first + second) % 10;
    // console.log(sum);
    output += sum + " ";
    first = second;
    second = sum;
}
console.log(output);