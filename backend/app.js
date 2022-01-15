const express = require("express");
const app = express();
const request = require("request");
const port = 3001;

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log("Listening on port", port));
