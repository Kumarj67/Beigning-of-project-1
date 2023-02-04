module.exports.home = function (req, res) {
  //   return res.end("<h1>Express is up for codiel</h1>");
  return res.render("home", {
    title: "Home",
  });
};

//module.exports.ActionName = function (req, res)
