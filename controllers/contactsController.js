module.exports.contact = function (req, res) {
  // return res.end("<h1>Welcome to contacts sections</h1>");
  return res.render("contacts", {
    title: "contacts",
  });
};
