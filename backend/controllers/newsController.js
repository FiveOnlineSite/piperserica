const NewsModel = require("../models/newsModel");
const path = require("path");

const createNews = async (req, res) => {
  try {
    const { thumbnail, title, date, news_category_id, news_url } = req.body;
    let mediaData = {};
    {
      const file = req.file;

      if (!file) {
        return res.status(400).json({
          message: "A webp image is required for the logo field.",
        });
      }
      // Check if the file is a pdf
      const isWebp = (file) => {
        const extname = path.extname(file.originalname).toLowerCase();
        return extname === ".webp";
      };

      if (!isWebp(file)) {
        return res.status(400).json({
          message: "Unsupported image type. Please upload a webp image.",
        });
      }

      fileType = "webp";
      mediaData = {
        filename: req.file.originalname,
        filepath: req.file.path,
      };
    }

    const newNews = new NewsModel({
      thumbnail: mediaData,
      title,
      date,
      news_category_id,
      news_url,
    });

    await newNews.save();

    res.status(200).json({
      message: "Added news data successfully",
      newNews,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding news data: ${error.message}`,
    });
  }
};

const updateNews = async (req, res) => {
  try {
    const { thumbnail, title, date, news_category_id, news_url } = req.body;

    const existingNews = await NewsModel.findById(req.params._id);

    if (!existingNews) {
      return res.status(404).json({ message: "News data not found." });
    }

    let mediaData = existingNews.thumbnail;
    const file = req.file;
    {
      if (file) {
        const fileExtensionName = path.extname(file.originalname).toLowerCase();

        if (fileExtensionName !== ".webp") {
          return res.status(400).json({
            message: "Unsupported image type. Please upload a webp image.",
          });
        }

        fileData = {
          filename: req.file.originalname,
          filepath: req.file.path,
        };
      }
    }

    // Create object with updated fields
    const updatedFields = {
      ...(title && { title }),
      ...(date && { date }),
      ...(news_category_id && { news_category_id }),
      ...(news_url && { news_url }),
      ...(file && { thumbnail: mediaData }),
    };

    const updatedNews = await NewsModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Updated news data successfully",
      updatedNews,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating news data: ${error.message}`,
    });
  }
};

const getNews = async (req, res) => {
  try {
    const news = await NewsModel.findById(req.params._id);

    if (news.length === 0) {
      return res.status(400).json({
        message: "No news is created with this id.",
      });
    }
    return res.status(200).json({
      message: "News fetched successfully.",
      news,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching news due to ${error}.`,
    });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.find();

    if (news.length === 0) {
      return res.status(400).json({
        message: "No news is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All news fetched successfully.",
      news,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all news due to ${error}.`,
    });
  }
};

const deleteNews = async (req, res) => {
  try {
    const news = await NewsModel.findByIdAndDelete(req.params._id);

    if (news.length === 0) {
      return res.status(400).json({
        message: "No news is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted news successfully.",
      news,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting news due to ${error}.`,
    });
  }
};

module.exports = {
  createNews,
  updateNews,
  getNews,
  getAllNews,
  deleteNews,
};
