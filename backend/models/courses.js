const mongoose = require("mongoose");
const courses = new mongoose.Schema({
  course: String,
  course_id: String,
  description: String,
});

module.exports = mongoose.model("Courses", courses);
