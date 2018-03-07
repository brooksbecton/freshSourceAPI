const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  authorId: { type: String, ref: "User", required: true },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  url: { type: String, required: true }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
