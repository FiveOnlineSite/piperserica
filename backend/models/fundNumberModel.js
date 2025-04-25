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
  fund_number1: [
    {
      type: String,
      required: true,
    },
  ],
  fund_title1: [
    {
      type: String,
      required: true,
    },
  ],
  fund_subtitle1: [
    {
      type: String,
      required: false,
    },
  ],
  fund_number2: [
    {
      type: String,
      required: false,
    },
  ],
  fund_title2: [
    {
      type: String,
      required: false,
    },
  ],
  fund_subtitle2: [
    {
      type: String,
      required: false,
    },
  ],
  fund_number3: [
    {
      type: String,
      required: false,
    },
  ],
  fund_title3: [
    {
      type: String,
      required: false,
    },
  ],
  fund_subtitle3: [
    {
      type: String,
      required: false,
    },
  ],
});

const FundNumberModel = mongoose.model("Fund Numbers", FundNumberSchema);

module.exports = FundNumberModel;
