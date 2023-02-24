const express = require("express");
const router = require("../router");

const port = process.env.PORT || 3000;

const server = express();

server.use(router);

server.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);

module.exports = server;
