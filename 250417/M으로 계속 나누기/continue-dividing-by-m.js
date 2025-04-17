const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = arr[0];
let m = arr[1];

// Please write your code here.
console.log(n);
while(parseInt(n/m) > 0){
    console.log(parseInt(n/m));
    n = n/m;
}