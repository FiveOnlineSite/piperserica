const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const Route = require("./routes/index");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api", (req, res) => {
  res.send("This is backend");
});

app.use("/api/auth", Route.authRoute);
app.use("/api/factsheet-presentation", Route.factsheetPresentationRoute);
app.use("/api/investor-letter", Route.investorLetterRoute);
app.use("/api/team", Route.teamRoute);
app.use("/api/fund-number", Route.fundNumberRoute);
app.use("/api/company-portfolio", Route.companyPortfolioRoute);
app.use("/api/news", Route.newsRoute);
app.use("/api/news-category", Route.newsCategoryRoute);

connectDb();

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(`Server connection failed due to ${error}`);
  }
  console.log(`Server is running on port ${PORT}`);
});
