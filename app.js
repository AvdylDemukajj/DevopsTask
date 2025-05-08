const http = require('http');
const port = 3000;
const message = process.env.MESSAGE || 'Nuk u vendos asnjë MESSAGE';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
});

server.listen(port, () => {
  console.log(`Serveri dëgjon në portin ${port}`);
});
