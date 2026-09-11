import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });

  res.end("<h2>Hello Client </h2>");
  console.log("server hit");
});

server.listen(4443, () => console.log("SErver is running..."));
