const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('./index.html')
const services = fs.readFileSync('./services.html')
const help = fs.readFileSync('./help.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let url = req.url;
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/help.html'){
        res.end(help)
    }
    else if(url == '/services.html'){
        res.end(services)
    }
    else if(url == '/contact.html'){
        res.end(contact);
    }
    else if(url == '/index.html'){
        res.end(home);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Tjergb</h1>")
    }
});

server.listen('3000', '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});