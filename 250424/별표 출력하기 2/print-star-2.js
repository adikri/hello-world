let fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

for(let i = input; i > 0; i--){
    let str = "";
    for(let j = 0; j < i; j++){
        str += "* ";
    }
    console.log(str);
}