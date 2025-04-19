let fs = require("fs");

let year = Number(fs.readFileSync(0).toString().trim());

if(year % 4 === 0){
    if(year % 100 === 0 && year % 400 !== 0){
        console.log(false);
    }else{
        console.log(true);
    }
}else{
    console.log(false);
}