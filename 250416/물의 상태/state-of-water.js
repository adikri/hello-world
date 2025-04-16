let fs = require("fs");
let tempOfWater = Number(fs.readFileSync(0).toString().trim());

if(tempOfWater < 0){
    console.log("ice");
}else if(tempOfWater >= 100){
    console.log("vapor");
}else{
    console.log("water");
}