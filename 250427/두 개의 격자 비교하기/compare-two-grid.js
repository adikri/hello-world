let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let arr1 = Array(n).fill(0).map(()=>Array(m).fill(0));
let arr2 = Array(n).fill(0).map(()=>Array(m).fill(0));
let arr3 = Array(n).fill(0).map(()=>Array(m).fill(0));

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        arr1[i] = input[i+1].split(" ").map(Number);
    }
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        arr2[i] = input[i+1+n].split(" ").map(Number);
    }
}

// console.log(arr1,arr2);

for(let i = 0; i < n; i++){
    let str = "";
    for(let j = 0; j < m; j++){
        // console.log(arr1[i][j],arr2[i][j]);
        
        if(arr1[i][j] !== arr2[i][j]){
            arr3[i][j] = 1;
        }
        str += arr3[i][j] + " ";
    }
    console.log(str);
}
// console.log(arr3);

// for(let i = 0; i < 4; i++){
//     let str = "";
//     for(let j = 0; j < 4; j++){
//         str += arr3[i][j] + " "; 
//     }
//     console.log(str);
// }