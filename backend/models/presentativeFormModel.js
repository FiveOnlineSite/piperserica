const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresentativeFormSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const PresentativeFormModel = mongoose.model(
  "PresentativeForm",
  PresentativeFormSchema
);

module.exports = PresentativeFormModel;
