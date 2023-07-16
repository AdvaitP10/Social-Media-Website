const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    comment: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

mongoose.export = mongoose.model("Comment", commentSchema);