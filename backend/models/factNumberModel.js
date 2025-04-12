const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const factNumberSchema = new mongoose.Schema({
  number: {
    type: String,
  },
  name: {
    type: String,
  },
});

const factNumberModel = mongoose.model("factNumber", factNumberSchema);

module.exports = factNumberModel;
