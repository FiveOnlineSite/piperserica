const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactsheetFormSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const FactsheetFormModel = mongoose.model("FactSheetForm", FactsheetFormSchema);

module.exports = FactsheetFormModel;
