// Require a library
const mongoose = require("mongoose");
// connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/contact_list_db");
// acquire the connection to check is it successfull
const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "connection error:"));
// up and running then print message
db.once("open", function () {
  console.log("successfully connected with the database");
});
module.exports = db;
