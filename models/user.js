// here we create the schema for the user.
const mongoose = require("mongoose");

//creating user fields collections
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // here unique gives the unique identity to the email.
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // here timestamps gives us the property or instance in tableof CreatedAt and UpdatedAt.
  }
);

//creating an Schema which is visible in the db. telling moongose it is a collection.
const User = mongoose.model("user", userSchema);

// exporting the modules
module.exports = User;
