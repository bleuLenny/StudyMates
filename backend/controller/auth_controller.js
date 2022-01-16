const passport = require("../middleware/passport");
const mongoose = require("mongoose");
const user = require("../models/users");
const dbURI =
  "mongodb+srv://study_admin:HackathonGroup2022@studymates.ndlu7.mongodb.net/study-groups?retryWrites=true&w=majority";
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is connected");
  }
);

let authController = {
  login: (req, res) => {
    console.log(req.body);
  },
  dashboard: (req, res) => {
    res.render("/");
  },
  register: (req, res) => {
    res.render("auth/register");
  },
  registerSubmit: (req, res) => {
    console.log(req.body);
    user.findOne({ email: req.body.email }, (err, doc) => {
      if (err) {
        throw err;
      }
      if (doc) {
        res.send("User already exists.");
      }
      const newUser = new user({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      });
    });
  },

  loginSubmit: passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  }),

  logout: (req, res) => {
    res.redirect("/");
    req.logout();
  },
};

module.exports = authController;
