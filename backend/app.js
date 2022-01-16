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

const indexRoute = require("./routes/indexRoute");
const authRoute = require("./routes/authRoute");

app.use(passport.initialize());
app.use(passport.session());

app.get('/test',(req,res)=>{
  res.send('lol')
})


app.get('/logout',(req,res)=>{
  res.send('lol')
})

// app.use("/", indexRoute);
// app.use("/auth", authRoute);

app.listen(port, () => console.log("Listening on port", port));
