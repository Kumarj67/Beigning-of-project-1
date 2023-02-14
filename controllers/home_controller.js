const Post = require("../models/post");
module.exports.home = function (req, res) {
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

  Post.find({})
    .populate("user")
    .exec(function (err, posts) {
      console.log(posts);
      return res.render("home", {
        title: "My Home Page",
        posts: posts,
      });
    });
};

// return res.end("<h1>Our codeial home page is up!!</h1>");
// module.exports.actionName = funciton(req, res) {return res.end("what message you wanna display on a web page.")}

// module.exports.login = function(req, res) {
//     return res.end("<h3> Currently login page is under maintainance please visit after some time. Sorry, for the inconvinience!!! </h3>")
// }
