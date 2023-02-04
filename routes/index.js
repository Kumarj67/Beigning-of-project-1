const express = require("express"); //it is at same instances it is created and require only at once
const router = express.Router();
console.log("router loaded");
const homeController = require("../controllers/controller_home");
router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/contacts", require("./Contacts"));

// for any routes .access from here
//router.get('/routerName',require()'./routerFile.js)

module.exports = router;
