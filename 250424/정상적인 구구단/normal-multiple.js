let fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++){
    let str = "";
    for(let j = 1; j <= n; j++){
        str += `${i} * ${j} = ${i*j}, `;
    }
    let str2 = str.slice(0,str.length-2);
    console.log(str2);
}