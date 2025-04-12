const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyPortfolioSchema = new mongoose.Schema({
  logo: {
    type: Array,
    filename: {
      type: String,
    },
    filepath: {
      type: String,
      required: true,
    },
  },
  company_name: {
    type: String,
  },
  company_description: {
    type: String,
  },
  company_url: {
    type: String,
  },
});

const CompanyPortfolioModel = mongoose.model(
  "CompanyPortfolio",
  CompanyPortfolioSchema
);

module.exports = CompanyPortfolioModel;
