const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/codiall_development");

// connecting mongoose with the db
const db = mongoose.connection;

//checking if there is any error while connecting
db.on(
  "error",
  console.error.bind(console, "error on connecting to the Database MongoDB")
);

//if there is no error while connecting.
db.once("open", function () {
  console.log("Connected to the databse successfully :: MongoDB");
});

// here we exports the module.
module.exports = db;
