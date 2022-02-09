const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: String,
    detail: String,
    dataCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);