const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.schema.types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamp: true,
  }
);

// exports
const post = mongoose.model("Post", postSchema);
module.exports = post;
