const http = require('http');
const fs = require("fs");
const fileContent = fs.readFileSync(`tut30.html`, "utf-8");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(fileContent);
});


server.listen(3000, "127.0.0.1", () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
