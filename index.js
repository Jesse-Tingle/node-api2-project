// libraries
const express = require("express");

// file imports
const db = require("./data/db");
const welcomeRouter = require("./Welcome/welcome-router");
const postsRouter = require("./Posts/posts-router");

// global objects
const server = express();

// middleware
server.use(express.json());

// sub-routers
server.use("/", welcomeRouter);
server.use("/api/posts", postsRouter);

const port = 8000;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
