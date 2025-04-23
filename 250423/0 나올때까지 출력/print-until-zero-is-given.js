let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;

while(true){
    let userInput = Number(input[index]);
    if(userInput === 0){
        break;
    }
    console.log(userInput);
    index++;
}