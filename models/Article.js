var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  scrapeTime: {
    type: Date
  }
});

// Create model using defined schema
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
