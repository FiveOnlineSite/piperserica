const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const Route = require("./routes/index");
const cors = require("cors");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const App = require("../frontend/src/App");
const { generateSitemap } = require("./generate-sitemap");

require("babel-register")({
  ignore: [/node_modules/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8000;

// Handle the static files
app.use(express.static(path.resolve(__dirname, "build")));

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

// app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// SSR route
app.get("*", (req, res) => {
  // Create the context for React Router
  const context = {};

  // Render the React App to an HTML string
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = ReactDOMServer.renderToString(jsx);

  // Send the rendered HTML along with the full page
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SSR with React and Express</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/main.js"></script> <!-- Your React bundle -->
      </body>
    </html>
  `);
});

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
app.use("/api/contact", Route.contactRoute);
app.use("/api/factsheet-form", Route.factsheetFormRoute);
app.use("/api/presentation-form", Route.presentationFormRoute);

// Serve the sitemap at /sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "public/sitemap.xml"));
});

connectDb();

generateSitemap();

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(`Server connection failed due to ${error}`);
  }
  console.log(`Server is running on port ${PORT}`);
});
