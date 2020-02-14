// libraries
const express = require("express");

// global objects
const router = express.Router();

// file imports
const db = require("../data/db");

// GET gets all posts
//   /api/posts
router.get("/", async (req, res) => {
  const posts = await db.find();
  console.log(posts);
  if (posts) {
    return res.status(200).json(posts);
  } else {
    return res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
});

// GET gets post by id
//   /api/posts/:id
router.get("/:id", (req, res) => {});

// GET gets comments by post id
//   /api/posts/:id/comments
router.get("/:id/comments", (req, res) => {});

// POST posts a new post
//   /api/posts
router.post("/", (req, res) => {});

// POST posts a new comment
//   /api/posts/:id/comments
router.post("/:id/comments", (req, res) => {});

// PUT updates post by id
//   /api/posts/:id
router.put("/:id", (req, res) => {});

// DELETE deletes post by id
//  /api/posts/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
