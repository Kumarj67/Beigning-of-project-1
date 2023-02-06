const express = require("express");
const router = express.Router();
console.log("Users loaded");

const usersController = require("../controllers/usersController");
router.get("/profile", usersController.profile);
router.get("/sign-in", usersController.signin);
router.get("/sign-up", usersController.signup);
//router.get("/create", usersController.create); //method should be same as in form of sign up method is defined as post but we are  using router.get
router.post("/create", usersController.create);
router.post("/create-session", usersController.createSession);

module.exports = router;
