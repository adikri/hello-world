let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = Array(4).fill(0).map(()=>Array(4).fill(0));
let arr2 = Array(4).fill(0).map(()=>Array(4).fill(0));
let arr3 = Array(4).fill(0).map(()=>Array(4).fill(0));

for(let i = 0; i < 4; i++){
    arr1[i] = input[i+1].split(" ").map(Number);
}

for(let i = 0; i < 4; i++){
    arr2[i] = input[i+5].split(" ").map(Number);
}

// console.log(arr1,arr2);

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        // console.log(arr1[i][j],arr2[i][j]);
        if(arr1[i][j] !== arr2[i][j]){
            arr3[i][j] = 1;
        }
    }
}
// console.log(arr3);

for(let i = 0; i < 4; i++){
    let str = "";
    for(let j = 0; j < 4; j++){
        str += arr3[i][j] + " "; 
    }
    console.log(str);
}