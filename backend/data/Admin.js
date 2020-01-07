const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
}, {
  collection: 'admin'
});

module.exports = mongoose.model('Admin', Admin);