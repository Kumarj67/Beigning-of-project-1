const express = require("express");
const router = express.Router();

const passport = require("passport");

const commentsController = require("../controllers/comments_controller");
// we have put method for post in home.js for views folder
router.post("/create", passport.checkAuthentication, commentsController.create);
router.get(
  "/destroy/:id",
  passport.checkAuthentication,
  commentsController.destroy
);

module.exports = router;
