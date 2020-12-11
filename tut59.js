const fs = require('fs');
let text = fs.readFileSync("tut59.txt", "utf-8");
text = text.replace(text, "This is written by Js.")
console.log(text);

console.log("Creating a new file tut59(b).txt")
fs.writeFileSync("tut59(b).txt", text);
console.log(text)