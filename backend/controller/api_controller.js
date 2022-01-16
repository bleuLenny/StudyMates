const mongoose = require("mongoose");
const process = require("process");
const dotenv = require("dotenv");
const Courses = require("../models/courses");
const User = require("../models/users");
dotenv.config();

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);
let apiController = {
  add: (req, res, next) => {
    Courses.find({ course: req.body.course }, async (err, doc) => {
      if (err) throw err;
      if (!doc) {
        const newCourse = new Courses({
          course: req.body.course,
          course_id: req.body.course_id,
          description: req.body.description,
        });
        await newCourse.save();
        res.redirect("./addCourse");
      }
    });
  },
  list: (req, res) => {
    Courses.find(async (err, doc) => {
      if (err) throw err;
      if (doc) res.send(doc);
      // if(!doc)console.log(doc)
    });
  },
  info: (req, res) => {
    User.find({ email: req.params.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send(doc);
    });
  },
  auth: (req, res) => {
    // console.log(req.session);
    res.send([req.session, req.user]);
  },
  filter: (req, res) => {
    Courses.find({ course_id: req.body.course_id }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send(doc);
      if (!doc) console.log("Nothing :( ");
    });
  },
};

module.exports = apiController;
