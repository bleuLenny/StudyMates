const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    res.render("/");
  },
  dashboard: (req, res) => {
    res.render("./dashboard", { req });
  },
  register: (req, res) => {
    res.render("auth/register");
  },
  registerSubmit: (req, res) => {
    console.log(req.body);
    res.redirect('/dashboard')
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
