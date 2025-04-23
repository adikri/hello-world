let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);

let b = Number(input[1]);

let output = a + " ";

while(a < b){
    if(a % 2 === 1){
        a = a*2;
    }else{
        a = a + 3;
    }
    if(a > b){
        break;
    }
    output += a + " ";
}

console.log(output);