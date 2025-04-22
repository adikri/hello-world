let fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let word1 = input[0];
let word2 = input[1];
// console.log(word1,word2);

if(word1.length>word2.length){
    console.log(word1,word1.length);
}else if(word1.length<word2.length){
    console.log(word2,word2.length);
}else{
    console.log("same");
}