const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.listen(5000, function () {
  console.log("Hello server is running at port 5000");
});
