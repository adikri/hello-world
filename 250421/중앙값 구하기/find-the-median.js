let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

if(num1 > num2 ){
    if(num3<num2){
        console.log(num2);
    }else if(num3<num1){
        console.log(num3);
    }else{
        console.log(num1);
    }
}else{
    if(num3<num1){
        console.log(num1);
    }else if(num3<num2){
        console.log(num3);
    }else{
        console.log(num2);
    }
}