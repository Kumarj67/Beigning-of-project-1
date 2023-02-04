const express = require("express");
const router = express.Router();
console.log("Users loaded");

const usersController = require("../controllers/usersController");
router.get("/profile", usersController.profile);

module.exports = router;
