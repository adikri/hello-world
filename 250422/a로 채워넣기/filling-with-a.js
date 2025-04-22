let fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let inputArr = input.split("");
inputArr[1] = "a";
inputArr[inputArr.length-2] = "a";

input = inputArr.join("");
console.log(input);