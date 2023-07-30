const Post = require('../models/post')

const createPost = async (req, res) => {
    const {media} = req.body;
    try {
        const newPost = await Post.create({
            media: media,
            user: req.userId
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

const deletePost = async (req, res) => {
    const id = req.params.postID;
    try {
        await Post.findOneAndRemove(id);
        res.status(202).json({message: "deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
}

module.exports = {createPost, getPost, deletePost}