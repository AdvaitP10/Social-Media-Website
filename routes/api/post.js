const express = require('express');
const { createPost, getPost, deletePost } = require('../../controllers/postController');
const auth = require('./middleware/auth');
const postRouter = express.Router();

postRouter.get("/", auth, getPost);
postRouter.post("/", auth, createPost);
postRouter.delete("/:postID", auth, deletePost);

module.exports = postRouter;