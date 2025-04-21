const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresentationFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PresentationFormModel = mongoose.model(
  "Presentation Form",
  PresentationFormSchema
);

module.exports = PresentationFormModel;
