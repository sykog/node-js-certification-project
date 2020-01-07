const express = require('express');
const app = express();
const newsRoute = express.Router();
let News = require('../News');

// Add user
newsRoute.route('/add-news').post((request, response, next) => {
  News.create(request.body, (error, data) => {
    if (error) return next(error);
    else response.json(data);
  });
});

// Get all newss
newsRoute.route('/').get((request, response, next) => {
  News.find((error, data) => {
    if (error) return next(error);
    else response.json(data);
  });
});

// Get news by id
newsRoute.route('/get-news/:id').get((request, response, next) => {
  News.findById(request.params.id, (error, data) => {
    if (error) return next(error);
    else response.json(data);
  });
});

// Update news
newsRoute.route('/update-news/:id').put((request, response, next) => {
  News.findByIdAndUpdate(request.params.id, {
    $set: request.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      response.json(data);
      console.log('User successfully updated!');
    }
  });
});

// Delete news
newsRoute.route('/delete-news/:id').delete((request, response, next) => {
  News.findByIdAndRemove(request.params.id, (error, data) => {
    if (error) return next(error);
    else response.status(200).json({msg: data});
  });
});

module.exports = newsRoute;