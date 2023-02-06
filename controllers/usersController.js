const User = require("../models/user");

module.exports.profile = function (req, res) {
  // return res.end("<h1>User's Profile</h1>");
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, function (err, user) {
      if (user) {
        return res.render("user_profile", {
          title: "Profile",
          user: user,
        });
      }
      if (err) {
        console.log("Error in loading profile page", err);
      }
    });
  } else {
    return res.redirect("/users/sign-in");
  }
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
      console.log("error in finding the user while signingup", err);
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating users in signingup", err);
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
module.exports.createSession = function (req, res) {
  // steps to authenticate
  // find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding the user while signing in", err);
      return;
    }
    //handle user found
    if (user) {
      // handle mismatching or password mismatched
      if (user.password != req.body.password) {
        return res.redirect("back");
      }
      //handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      //handle user not found
      return res.redirect("back");
    }
  });
};
