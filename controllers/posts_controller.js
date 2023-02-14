const Post = require("../models/post");
module.exports.create = function (req, res) {
  Post.create(
    {
      content: req.body.content,
      //   to check which user has posted comments
      user: req.user._id,
    },
    function (err, post) {
      if (err) {
        console.log("error in creating a post", err);
        return;
      }
      return res.redirect("back");
    }
  );
};
