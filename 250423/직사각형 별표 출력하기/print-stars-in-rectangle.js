let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);
// let o = Number(input[2]);console.log(o);
// console.log(Number(" "));

for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < m; j++){
        str += "*" + " ";
    }
    console.log(str);
}
