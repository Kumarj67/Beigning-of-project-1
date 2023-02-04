const express = require("express"); //it is at same instances it is created and require only at once
const router = express.Router();
console.log("router loaded");
const homeController = require("../controllers/controller_home");
router.get("/", homeController.home);

module.exports = router;
