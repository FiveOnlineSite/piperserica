const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  linkedin_url: {
    type: String,
  },
});

const TeamModel = mongoose.model("Team", TeamSchema);

module.exports = TeamModel;
