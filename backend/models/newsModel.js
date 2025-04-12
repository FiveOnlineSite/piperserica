const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new mongoose.Schema({
  thumbnail: {
    type: Array,
    filename: {
      type: String,
    },
    filepath: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  tag: {
    type: String,
    enum: ["", "videos", "angel fund"],
    default: "",
  },
});

const NewsModel = mongoose.model("News", NewsSchema);

module.exports = NewsModel;
