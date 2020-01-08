const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let News = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  Url: {
      type: String
  },
  UrlToImage: {
      type: String
  },
  publish_date: {
    type: Date, 
    default: Date.now()
  }
});

module.exports = mongoose.model('News', News);