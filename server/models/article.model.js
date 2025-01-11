const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    id: {
        type: Date,
        default: Date.now(),
    },
    title: String,
    author: String,
    published_date: {
        type: String,
        default: Date.now(),
    },
    category: String,
    content: String,
});

const articleModel = mongoose.model("article", articleSchema);
module.exports = articleModel;
