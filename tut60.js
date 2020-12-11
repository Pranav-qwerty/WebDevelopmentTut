const fs = require("fs");
let text = fs.readFile("tut60.txt", "utf-8", (err, b)=>{
    console.log(err, b);
});
console.log("This is a message!");