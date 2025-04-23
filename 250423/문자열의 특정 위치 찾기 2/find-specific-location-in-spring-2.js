let s1 = "apple";
let s2 = "banana";
let s3 = "grape";
let s4 = "blueberry";
let s5 = "orange";

let fruits = ["apple","banana","grape","blueberry","orange"];

let fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

// console.log(s1.charAt(2));

let count = 0;

for(let i = 0; i < fruits.length; i++){
    if(fruits[i].charAt(2) === input || fruits[i].charAt(3) === input){
        console.log(fruits[i]);
        count++
    }
}
console.log(count);