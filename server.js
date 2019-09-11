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
mongoose.connect("mongodb://localhost/week18homework", {
  useNewUrlParser: true
});

//Routes
app.get("/", function(req, res) {
  res.send("hit home route");
});

app.get("/addanarticle", function(req, res) {
  db.Article.create({
    headline: "Apple",
    summary: "It's a red fruit",
    url: "Too sugary."
  })
    .then(function(dbArticle) {
      console.log(dbArticle);
      res.send("Added article.");
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.get("/addacomment", function(req, res) {
  db.Comment.create({
    user: "johnsmith",
    commentText: "No way.",
    associatedArticleURL: "Too sugary."
  })
    .then(function(dbComment) {
      console.log(dbComment);
      res.send("Added comment.");
    })
    .catch(function(err) {
      console.log(err);
    });
});

//Start server
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
