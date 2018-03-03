const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  created_at: Date,
  updated_at: Date
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;