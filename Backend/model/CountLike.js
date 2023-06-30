const mongoose = require("mongoose");

const countLikes= new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    likes:{
        type: Number,
    }
});

const LikesCount = mongoose.model("countLikes", countLikes);

module.exports = LikesCount;