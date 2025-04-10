const express = require("express");

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("This is backend");
});

app.listen(8000, "0.0.0.0", (error) => {
  if (error) {
    console.log(`Server connection failed due to ${error}`);
  }
  console.log(`Server is running on port 8000`);
});
