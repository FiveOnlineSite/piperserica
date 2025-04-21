const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FundNumberSchema = new Schema({
  fund_name: {
    type: String,
    required: true,
  },
  fund_figures: {
    type: String,
    required: false,
  },
  fund_numbers: [
    {
      type: String,
      required: true,
    },
  ],
  fund_titles: [
    {
      type: String,
      required: true,
    },
  ],
  fund_subtitles: [
    {
      type: String,
      required: false,
    },
  ],
});

const FundNumberModel = mongoose.model("Fund Numbers", FundNumberSchema);

module.exports = FundNumberModel;
