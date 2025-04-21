let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

if(num1>num2){
    if(num1<num3){
        console.log(num1);
    }else{
        console.log(num3);
    }
}else {
    if(num2<num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}