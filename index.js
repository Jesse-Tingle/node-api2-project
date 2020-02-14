// libraries
const express = require("express");

// file imports
const db = require("./data/db");

// global objects
const server = express();

// middleware
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Project 2" });
});

const port = 8000;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
