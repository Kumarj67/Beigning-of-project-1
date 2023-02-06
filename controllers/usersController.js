const User = require("../models/user");

module.exports.profile = function (req, res) {
  // return res.end("<h1>User's Profile</h1>");
  return res.render("user_profile", {
    title: "Profile",
  });
};
// Render the Signup pages
module.exports.signup = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codiel/Sign Up",
  });
};
// Render the sign in page
module.exports.signin = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codiel/Sign In",
  });
};
// get the signup data
module.exports.create = function (req, res) {
  if (req.body.password !== req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in signup", err);
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in signup", err);
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// get the signin data
module.exports.createSession = function (req, res) {};
