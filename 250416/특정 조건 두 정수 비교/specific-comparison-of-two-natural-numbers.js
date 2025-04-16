let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let output1 = 0;
let output2 = 0;

if(a < b){
    output1 = 1;
}else{
    output1 = 0;
}
if(a == b){
    output2 = 1;
}else{
    output2 = 0;
}

console.log(output1, output2)