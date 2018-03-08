const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
  created_at: { type: Date, default: Date.now() },
  domain: { type: String, required: true },
  updated_at: { type: Date, default: Date.now() }
});

const Source = mongoose.model("Source", sourceSchema);

module.exports = Source;
