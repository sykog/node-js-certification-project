const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let News = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  publish_date: {
    type: Date, default: Date.now()
  },
}, {
  collection: 'news'
});

module.exports = mongoose.model('News', News);