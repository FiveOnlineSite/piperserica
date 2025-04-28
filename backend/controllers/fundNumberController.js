const FundNumberModel = require("../models/fundNumberModel");

const createFundNumber = async (req, res) => {
  try {
    const {
      fund_name,
      fund_figures,
      fund_number1,
      fund_title1,
      fund_subtitle1,
      fund_number2,
      fund_title2,
      fund_subtitle2,
      fund_number3,
      fund_title3,
      fund_subtitle3,
    } = req.body;

    const newFundNumber = new FundNumberModel({
      fund_name,
      fund_figures,
      fund_number1,
      fund_title1,
      fund_subtitle1,
      fund_number2,
      fund_title2,
      fund_subtitle2,
      fund_number3,
      fund_title3,
      fund_subtitle3,
    });

    await newFundNumber.save();

    res.status(200).json({
      message: "Added fund number data successfully",
      newFundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding fund number data: ${error.message}`,
    });
  }
};

const updateFundNumber = async (req, res) => {
  try {
    const {
      fund_name,
      fund_figures,
      fund_number1,
      fund_title1,
      fund_subtitle1,
      fund_number2,
      fund_title2,
      fund_subtitle2,
      fund_number3,
      fund_title3,
      fund_subtitle3,
    } = req.body;

    const existingFundNumber = await FundNumberModel.findById(req.params._id);

    if (!existingFundNumber) {
      return res.status(404).json({ message: "Fund Number data not found." });
    }

    // Create object with updated fields
    const updatedFields = {
      ...(fund_name && { fund_name }),
      ...(fund_figures && { fund_figures }),
      ...(fund_number1 && { fund_number1 }),
      ...(fund_title1 && { fund_title1 }),
      ...(fund_subtitle1 && { fund_subtitle1 }),
      ...(fund_number2 && { fund_number2 }),
      ...(fund_title2 && { fund_title2 }),
      ...(fund_subtitle2 && { fund_subtitle2 }),
      ...(fund_number3 && { fund_number3 }),
      ...(fund_title3 && { fund_title3 }),
      ...(fund_subtitle3 && { fund_subtitle3 }),
    };

    const updatedFundNumber = await FundNumberModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Updated fund number data successfully",
      updatedFundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating fund number data: ${error.message}`,
    });
  }
};

const getFundNumber = async (req, res) => {
  try {
    const fundNumber = await FundNumberModel.findById(req.params._id);

    if (fundNumber.length === 0) {
      return res.status(400).json({
        message: "No fund number data is created with this id.",
      });
    }
    return res.status(200).json({
      message: "Fund number data fetched successfully.",
      count: fundNumber.length,
      fundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fund number data due to ${error}.`,
    });
  }
};

const getAllFundNumber = async (req, res) => {
  try {
    const fundNumbers = await FundNumberModel.find();

    if (fundNumbers.length === 0) {
      return res.status(400).json({
        message: "No fund number data is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All fund number data fetched successfully.",
      fundNumbers,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all fund number data due to ${error}.`,
    });
  }
};

const deleteFundNumber = async (req, res) => {
  try {
    const fundNumber = await FundNumberModel.findByIdAndDelete(req.params._id);

    if (fundNumber.length === 0) {
      return res.status(400).json({
        message: "No fund number data is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted fund number data successfully.",
      fundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting fund number data due to ${error}.`,
    });
  }
};

module.exports = {
  createFundNumber,
  updateFundNumber,
  getFundNumber,
  getAllFundNumber,
  deleteFundNumber,
};
