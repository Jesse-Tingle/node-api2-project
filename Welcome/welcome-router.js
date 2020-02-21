// libraries
const express = require("express");

// global objects
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Node JS Project #2</h1>`);
});

module.exports = router;
