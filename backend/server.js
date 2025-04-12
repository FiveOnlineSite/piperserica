const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const Route = require("./routes/index");

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/api", (req, res) => {
  res.send("This is backend");
});

app.use("/api/auth", Route.authRoute);

connectDb();

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(`Server connection failed due to ${error}`);
  }
  console.log(`Server is running on port ${PORT}`);
});
