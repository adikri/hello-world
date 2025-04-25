let fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

let num = 1;
for(let i = 1; i <= n; i++){
    let output = "";
    for(let j = 1; j <= i; j++){
        output += num + " ";
        num++;
    }
    console.log(output);
}