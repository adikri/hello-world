let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;

while(true){
    let userInput = Number(input[index]);
    index++;
    if(userInput < 25){
        console.log("Higher");
    }else if(userInput > 25){
        console.log("Lower");
    }else{
        console.log("Good");
        break;
    }
}