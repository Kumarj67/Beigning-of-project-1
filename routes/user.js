// const { Router } = require('express');  // add by mistake.
const express = require("express");
const router = express.Router();

// here we import the passport.
const passport = require("passport");

const profile_controller = require("../controllers/user_controller");

console.log("user controller add successfully!!!!");

router.get(
  "/profile/:id",
  passport.checkAuthentication,
  profile_controller.profile
); //checking if thee user sign in or not

router.post(
  "/update/:id",
  passport.checkAuthentication,
  profile_controller.update
);

// connecting the user Sig In and Sign up routes to the conttroller.
router.get("/sign-in", profile_controller.signIn);
router.get("/sign-up", profile_controller.signUp);

//creating the Ceate Router for inserting the data to the db Table. here  we are using the post method to posting the  data in db.
router.post("/create", profile_controller.create);

// here we create the router for the create-session
// here our roter takes the three arguemnt instead of two and one is the middleware.
// router.post('/create-session',passport.authenticate('local',{failureRedirect:'/user/sign-in'}), profile_controller.createSession);

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/user/sign-in" }),
  profile_controller.createSession
);

// Using the Sign Out Controller
router.get("/sign-out", profile_controller.destroySession);

module.exports = router;
