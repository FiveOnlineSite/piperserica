const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestorSchema = new mongoose.Schema({
  fileUpload: {
    type: Array,
    required: true,
  },
  monthYear: {
    type: String,
  },
  date: {
    type: Date,
  },
  title: {
    type: String,
  },
});

const InvestorModel = mongoose.model("Investor", InvestorSchema);

module.exports = InvestorModel;
