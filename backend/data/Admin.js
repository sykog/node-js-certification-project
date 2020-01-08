const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const config = require('../config');

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

Admin.statics.verifyToken = function(token){
  try{
      const payload = jwt.verify(token,'abcd1234')
      console.log(payload)
      return payload;
  } catch(e){
      return null;
  }
}

module.exports = mongoose.model('Admin', Admin);