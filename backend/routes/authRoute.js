const authController = require("../controllers/authController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const userMiddleware = require("../middlewares/userMiddleware");
const route = express.Router();

route.post("/register", authController.register);

route.post("/login", authController.login);

route.post("/logout", authController.logout);

route.post("/refresh_token", authController.recreateAccessToken);

// route.get("/user", userMiddleware, authController.authUser);

route.get("/admin", adminMiddleware, authController.authAdmin);

module.exports = route;
