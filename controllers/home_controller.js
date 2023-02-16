const Post = require("../models/post");
const User = require("../models/user");
module.exports.home = async function (req, res) {
  // checking the cookies value using the req because we are requesting the cookie to the browser.
  // console.log(req.cookies);  // cookies comes as request but going as a response ,to the browser

  // // here I try to change the cookise inside the code
  // res.cookie('user_id', 07);
  // Post.find({}, function (err, posts) {
  //   return res.render("home", {
  //     title: "My Home Page",
  //     posts: posts,
  //   });
  // });

  // populate the user of each posts
  try {
    let posts = await Post.find({})
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
      });
    let users = await User.find({}, function (err, users) {
      return res.render("home", {
        title: "My Home Page",
        posts: posts,
        all_users: users,
      });
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }

  // .exec(function (err, posts) {
  //  console.log(posts);
  // User.find({}, function (err, users) {
  //   return res.render("home", {
  //     title: "My Home Page",
  //     posts: posts,
  //     all_users: users,
  //   });
  // });

  // return res.end("<h1>Our codeial home page is up!!</h1>");
  // module.exports.actionName = funciton(req, res) {return res.end("what message you wanna display on a web page.")}

  // module.exports.login = function(req, res) {
  //     return res.end("<h3> Currently login page is under maintainance please visit after some time. Sorry, for the inconvinience!!! </h3>")
  // }
};
