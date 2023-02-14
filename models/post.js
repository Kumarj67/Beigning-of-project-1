const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // include all the ids of all post schema in arrays
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  },
  {
    timestamp: true,
  }
);

// exports
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
