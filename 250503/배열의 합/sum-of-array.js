let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = Array(4).fill(0).map(()=>Array(4).fill(0));

// console.log(arr);

for(let i = 0; i < 4; i++){
    let sum = 0;
    for(let j = 0; j < 4; j++){
        arr[i] = input[i].split(" ").map(Number);
        sum += arr[i][j];
    }
    console.log(sum);
}
// console.log(arr);