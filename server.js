//Requirements
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();

//PORT
var PORT = process.env.PORT || 8000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Import DB models
var db = require("./models");

//Connect to database
mongoose.connect("mongodb://localhost/unit18Populater", {
  useNewUrlParser: true
});

//Routes
app.get("/", function(req, res) {
  res.send("hit home route");
});

//Start server
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
