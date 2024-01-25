const http = require("node:http");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`🔗 ${req.socket.remoteAddress} connected to server`);
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.write("<h1>You were connected to server.</h1>");
  res.write("<h2>How are you</h2>");
  res.end("<h3>End</h3>");
});

server.listen(PORT, HOST, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
