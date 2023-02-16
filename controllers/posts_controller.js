const Post = require("../models/post");
const Comment = require("../models/comment");
module.exports.create = async function (req, res) {
  try {
    await Post.create(
      {
        content: req.body.content,
        //   to check which user has posted comments
        user: req.user._id,
      }

      // function (err, post) {
      //   if (err) {
      //     console.log("error in creating a post", err);
      //     return;
      //   }
      //   return res.redirect("back");
      // }
    );
    req.flash("Success", "Post Published");
    return res.redirect("back");
  } catch (err) {
    console.log("Error", err);
    return res.redirect("back");
  }
};

module.exports.destroy = async function (req, res) {
  console.log(req.params.id);
  try {
    let post = await Post.findById(req.params.id);
    // .id means converting object id into string

    if (post.user == req.user.id) {
      post.remove();
      await Comment.deleteMany({
        post: req.params.id,
      });
      req.flash("Success", "post and associated comments deleted");
      return res.redirect("back");
    } else {
      req.flash("error","you can not deleted this post")
      return res.redirect("back");
    }
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
