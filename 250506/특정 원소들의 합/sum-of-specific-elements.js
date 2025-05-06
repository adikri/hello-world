let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = [];

let sum = 0;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < i+1; j++){
        arr[i] = input[i].split(" ").map(Number);
        // console.log(arr[i][j]);
        sum += arr[i][j];
    }
}

console.log(sum);