const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
const session = require("express-session");
const passport = require("./middleware/passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const port = 3001;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretSecret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretSecret"));

app.use(passport.initialize());
app.use(passport.session());
// require('./middleware/passport')(passport)

const indexRoute = require("./routes/indexRoute");
const authRoute = require("./routes/authRoute");
const apiRoute = require("./routes/apiRoute");

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRoute);
app.use("/auth", authRoute);
app.use("/api", apiRoute);

app.listen(port, () => console.log("Listening on port", port));
