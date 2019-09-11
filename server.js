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

app.post("/addanarticle", function(req, res) {
  db.Article.create({
    headline: req.body.headline,
    summary: req.body.summary,
    url: req.body.url
  })
    .then(function(dbArticle) {
      console.log(dbArticle);
      res.send("Added article.");
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.post("/addacomment", function(req, res) {
  db.Comment.create({
    user: req.body.user,
    commentText: req.body.commentText,
    associatedArticleURL: req.body.associatedArticleURL
  })
    .then(function(dbComment) {
      console.log(dbComment);
      res.send("Added comment.");
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.get("/scrape", function(req, res) {
  axios.get("https://9to5mac.com/").then(function(response) {
    var $ = cheerio.load(response.data);
    var resultArr = [];
    $("article").each(function(i, element) {
      var result = {};
      result.headline = $(this)
        .children("div")
        .children("h1")
        .children("a")
        .text();
      result.summary = $(this)
        .children("a")
        .attr("href");
      result.url = $(this)
        .children("a")
        .attr("href");
      console.log(result);
      resultArr.push(result);
    });
    res.json(resultArr);
  });
});

//Start server
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
