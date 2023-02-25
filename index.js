const express = require("express");

const port = process.env.PORT || 3000;

const server = express();

server.use(express.static("public"));

server.get("*", (req, res) => {
  res.send("ok");
});

server.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);

module.exports = server;
