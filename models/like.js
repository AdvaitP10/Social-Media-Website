const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Post"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
},{
    timestamps: true,
});

mongoose.export = mongoose.model("Like", likeSchema);