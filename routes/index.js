const express = require("express");

const router = express.Router();

// adding controller here.
const homeController = require("../controllers/home_controller");

console.log("routes added successfully!!");

// adding controller for our page.
router.get("/", homeController.home);
router.use("/user", require("./user"));
// adding controller for post
router.use("/posts", require("./posts"));

//for any further routes
//router.use('./routerName', require('./routerFile'));

module.exports = router;
