const express = require("express");
const router = express.Router();

const postController = require("../controllers/posts_controller");
// we have put method for post in home.js for views folder
router.post("/create", postController.create);

module.exports = router;
