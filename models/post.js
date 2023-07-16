const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    media: {
        type: String,
        trim: true,
    },
    user: {
        type: mongoose.SchemaType.objectId,
        ref: "User",
    },
    likes: [
        {
            type: mongoose.SchemaType.objectId,
            ref: "Like"
        }
    ],
    comment: [
        {
            type: mongoose.SchemaType.objectId,
            ref: "Comment"
        }
    ]
},{
    timestamps: true,
});

mongoose.export = mongoose.model("Post", postSchema);