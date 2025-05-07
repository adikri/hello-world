let fs = require("fs");

let input = Number(fs.readFileSync(0).toString().trim());

let arr = [];
// console.log(arr);
let output = "";

for(let i = 0; i < input; i++){
    arr[i] = [];
    for(let j = 1; j <= input; j++){
        // console.log(j);
        arr[i].push(j);
        // console.log(arr);
    }
    if(i%2==1){
        arr[i].reverse();
    }
    // console.log(arr);
    output = arr[i].join("");
    console.log(output);
}
// for(let i = 0; i < arr.length; i++){
//     // console.log(arr[i]);
//     output = arr[i].join("");
//     console.log(output);
// }