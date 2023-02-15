// importing the User data from the models
const { findByIdAndUpdate } = require("../models/post");
const User = require("../models/user");

// const passport = require('passport');

module.exports.profile = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    return res.render("user", {
      title: "user Page",
      profile_user: user,
    });
  });
};
module.exports.update = function (req, res) {
  if (req.user.id == req.params.id) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
      return res.redirect("back");
    });
  } else {
    return res.status(401).send("unotherised");
  }
};

// render the Sigin page
module.exports.signIn = function (req, res) {
  //if the user is sign in

  // here we are checking if the user is authenticated for the certain period of time (fwhen the server is not restart)

  // cookies are store for a particular time period while server is running.
  if (req.isAuthenticated()) {
    return res.redirect("/user/profile");
  }

  return res.render("user_sign_in", {
    title: "Codiall | Signin",
  });
};

// render the Sign Up Page
module.exports.signUp = function (req, res) {
  //if the user is sign up
  if (req.isAuthenticated()) {
    return res.redirect("/user/profile");
  }

  return res.render("user_sign_up", {
    title: "Codeiall | SignUp",
  });
};

//get the data from the form.
module.exports.create = function (req, res) {
  // here we are checking the credentials and adding to database.

  if (req.body.password != req.body.confirm_password) {
    console.log("password doesn't match");
    return res.redirect("back");
  }

  // chceking the user email using the findOne function
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("there is an error to find the user.");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while siging up", err);
          return;
        }
        return res.redirect("/user/sign-in");
      });
    } else {
      console.log("user added successfully :)");
      return res.redirect("back");
    }
  });
};

// sign in and creating the session for the user.
module.exports.createSession = function (req, res) {
  console.log("123");
  return res.redirect("/");
};

module.exports.destroySession = function (req, res, next) {
  //here we are logout from the apage or session
  req.logout(function (err) {
    if (err) {
      return next(err);
    } else {
      console.log("Log out Successfully");
    }
  });

  // after loggin out from the page we are redirecting to home page.
  return res.redirect("/");
};
