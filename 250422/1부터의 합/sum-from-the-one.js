let fs = require("fs");

let input = Number(fs.readFileSync(0).toString().trim());

let sum = 0;
let output = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
    if(sum>=input){
        output = i;
        break;
    }
    
}

console.log(output);