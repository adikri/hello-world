let fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

// console.log(input);
let a = input.split(" ");
console.log(a.reverse().join(""));