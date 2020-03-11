const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();
const router = require("./routes");

server.use(cors());
server.use(bodyParser.json());
server.use(express.static(__dirname));
server.use(express.static(path.join(__dirname, "public")));
server.use("/", router);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports = server;
