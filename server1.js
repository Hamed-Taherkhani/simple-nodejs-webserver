const http = require("node:http");
const url = require("node:url");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(
    `🔗 ${req.socket.remoteAddress} requested ${req.url} on port ${PORT}`
  );
  const parsedUrl = url.parse(req.url);
  res.setHeader("content-type", "text/html");

  switch (parsedUrl.pathname) {
    case "/":
      res.statusCode = 200;
      res.end(
        "<h1>Home</h1><a href='/about'>About page</a><br/><a href='/contact'>Contact</a>"
      );
      break;
    case "/about":
      res.status = 200;
      res.end("<h1>About</h1><a href='../'>Home</a>");
      break;
    case "/contact":
      res.statusCode = 200;
      res.end("<h1>Contact</h1><a href='../'>Home</a>");
      break;
    default:
      res.statusCode = 404;
      res.end('<h1 style="color: red;">Not found!</h1><a href="../">Home</a>');
      break;
  }
});

server.listen(PORT, HOST, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
