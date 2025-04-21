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
  industry: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  company_description: {
    type: String,
    required: true,
  },
  company_url: {
    type: String,
    required: true,
  },
});

const CompanyPortfolioModel = mongoose.model(
  "CompanyPortfolio",
  CompanyPortfolioSchema
);

module.exports = CompanyPortfolioModel;
