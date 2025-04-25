let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let div3 = 0;

for(let i = a; i <= b; i++){
    // let count = 0;
    let div = 0;
    for(let j = 1; j <= i; j++){
        
        if(i % j === 0){
            div++;
        }

    }
    if(div === 3){
        div3++;
    }
}
console.log(div3);