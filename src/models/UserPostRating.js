const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPostRatingSchema = new Schema({
    authorId: { type: String, ref: "User", required: true },
    authorId: { type: String, ref: "Post", required: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    Rating: { type: Number, required: true }
});

const UserPostRating = mongoose.model("UserPostRating", userPostRatingSchema);

module.exports = UserPostRating;
