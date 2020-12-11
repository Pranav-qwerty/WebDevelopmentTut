const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Json</title>
  </head>
  <body>
      <div class="co">
          This is my
      </div>
      <script>
          let jsonObj = {
              name: "Pranav",
              age: "12",
              friend: "xyz"
          }
          console.log(jsonObj);
          let myJson = JSON.stringify(jsonObj);
          console.log(myJson);
          myJson = myJson.replace('Pranav', 'Hello');
          console.log(myJson);
          newmyJson = JSON.parse(myJson);
          console.log(newmyJson)
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});