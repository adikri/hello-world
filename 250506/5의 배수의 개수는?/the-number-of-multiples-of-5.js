let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = [];
let count = 0;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        arr[i] = input[i].split(" ").map(Number);
        // console.log(arr);
        if(arr[i][j] % 5 == 0){
            count++;    
        }
    }
}
console.log(count);