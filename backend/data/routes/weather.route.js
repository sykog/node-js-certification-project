const express = require('express');
const app = express();
const axios = require('axios').default;
const weatherRoute = express.Router();

// get the weather from weather api
weatherRoute.route('/search-weather').post((request, response, next) => {
  axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + request.body.zip +
    ',us&units=imperial&appid=b4926e4138ca8f62a30814262ec6422d').then(data => {
    const weatherData = {
      description: data.data.weather[0].description,
      tempurature: data.data.main.temp,
      humidity: data.data.main.humidity,
      city: data.data.name,
      icon: 'http://openweathermap.org/img/wn/' + data.data.weather[0].icon + '@2x.png'
    }

    response.json(weatherData);
  }).catch(error => {
    console.log(error);
    response.json({description: "error"});
    return next(error);
  });
});

module.exports = weatherRoute;