const express = require("express");
const app = express();
const request = require("request");
const port = 3001;

const session = require("express-session");
const passport = require("./middleware/passport");

app.use(express.urlencoded({ extended: false }));


app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 600000,
      },
    })
  );

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log("Listening on port", port));
