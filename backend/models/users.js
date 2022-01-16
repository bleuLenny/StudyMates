const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: String,
  first_name: String,
  last_name: String,
  password: String,
  major: String,
});

module.exports = mongoose.model("User", user);
