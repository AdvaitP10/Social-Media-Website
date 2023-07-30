const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    media: {
        type: String,
        trim: true,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
        }
    ],
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},{
    timestamps: true,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;