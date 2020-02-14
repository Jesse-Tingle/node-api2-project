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
router.get("/:id", async (req, res) => {
  try {
    const post = await db.findById(req.params.id);

    if (post.length < 1) {
      return res.status(404).json({
        message: `The post with id ${req.params.id} does not exist.`
      });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      err,
      errorMessage: "The user information could not be retrieved."
    });
  }
});

// GET gets comments by post id
//   /api/posts/:id/comments
router.get("/:id/comments", async (req, res) => {
  try {
    const comment = await db.findPostComments(req.params.id);

    if (comment.length < 1) {
      return res.status(404).json({
        message: `The post with id ${req.params.id} does not have comments.`
      });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({
      err,
      errorMessage: "The comments information could not be retrieved."
    });
  }
});

// POST posts a new post
//   /api/posts
router.post("/", async (req, res) => {
  try {
    const { title, contents } = req.body;
    console.log("title: ", title);
    console.log("contents: ", contents);

    if (!title || !contents) {
      return res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    }

    res.status(201).json(await db.insert({ title, contents }));
  } catch (error) {
    res.status(500).json({
      err,
      errorMessage: "There was an error while saving the post to the database"
    });
  }
});

// POST posts a new comment
//   /api/posts/:id/comments
//router.post("/:id/comments", (req, res) => {});

// PUT updates post by id
//   /api/posts/:id
//router.put("/:id", (req, res) => {});

// DELETE deletes post by id
//  /api/posts/:id
//router.delete("/:id", (req, res) => {});

module.exports = router;
