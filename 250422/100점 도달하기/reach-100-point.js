let fs = require("fs");

let input = Number(fs.readFileSync(0).toString().trim());

let output = "";

for(let i = input; i <= 100; i++){
    if(i<60){
        output += "F" + " ";
    }else if(i<70){
        output += "D" + " ";
    }else if(i<80){
        output += "C" + " ";
    }else if(i<90){
        output += "B" + " ";
    }else{
        output += "A" + " ";
    }
}

console.log(output);