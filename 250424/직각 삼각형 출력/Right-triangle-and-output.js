let fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= input; i++){
    let str = "";
    for(let j = 1; j <= 2*i-1; j++){
        str += "*";
    }
    console.log(str);
}