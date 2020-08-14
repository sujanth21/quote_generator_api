const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  quoteText: {
    type: String,
    required: [true, "Please add a quote text"],
    trim: true,
  },
  quoteAuthor: {
    type: String,
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
