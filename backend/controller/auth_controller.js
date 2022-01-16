const passport = require("../middleware/passport");
const mongoose = require("mongoose");
const User = require("../models/users");
const bcrypt = require("bcryptjs");

mongoose.connect(
  "mongodb+srv://study_admin:HackathonGroup2022@studymates.ndlu7.mongodb.net/study-groups?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);
let authController = {
  login: (req, res, next) => {
    // console.log(req.body);
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No user exitsts");
      else {
        req.login(user, (err) => {
          if (err) throw err;
          res.send("Succeess");
          console.log(req.user);
        });
      }
    })(req, res, next);
  },
  dashboard: (req, res) => {
    res.render("/");
  },
  register: (req, res) => {
    res.render("auth/register");
  },
  registerSubmit: (req, res) => {
    User.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exists.");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
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
