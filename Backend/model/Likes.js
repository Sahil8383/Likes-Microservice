const mongoose = require("mongoose");

const LikesSchema = new mongoose.Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId,
  },
  user_id: {
    type: String,
  },
  content_id: {
    type: String,
  },
  likes:{
    type: Number,
  }
});

const Likes = mongoose.model("Likes", LikesSchema);

module.exports = Likes;
