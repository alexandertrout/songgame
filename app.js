const express = require("express");
const path = require("path");
const server = express();
const { getSongsByArtist } = require("./controllers");
const apiRouter = require("./api-Router");

server.use(express.json());
server.use("/api", apiRouter);
server.get("/songs?", getSongsByArtist);

// why did it not work before but did once i included path.join() and required path in at the top???????
server.use(express.static("public"));

server.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

server.get("/correct", (req, res, next) => {
  res.sendFile(__dirname + "/views/correct.html");
});

server.get("/wrong", (req, res, next) => {
  res.sendFile(__dirname + "/views/wrong.html");
});

server.set("view engine", "ejs");

server.use((err, req, res, next) => {
  if (err) console.log(err);
  res.status(500).send({ msg: "Server Error!" });
});

module.exports = server;
