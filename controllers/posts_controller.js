const Post = require("../models/post");
const Comment = require("../models/comment");
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

module.exports.destroy = function (req, res) {
  console.log(req.params.id);
  Post.findById(req.params.id, function (err, post) {
    // .id means converting object id into string
    console.log(post);
    if (post.user == req.user.id) {
      post.remove();
      Comment.deleteMany(
        {
          post: req.params.id,
        },
        function (err) {
          console.log("in");
          return res.redirect("back");
        }
      );
    } else {
      return res.redirect("back");
    }
  });
};
