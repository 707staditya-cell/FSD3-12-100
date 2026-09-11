import http from "http";

const server = http.createServer((req, res) => {
  console.log("server hit by client ");
  res.write("<h2>Hello Client </h2>"); // run the server and print
  res.end("<h2>Hello Client  </h2>"); /// run and end the server
});

server.listen(4444, () => console.log("Server is running...."));
