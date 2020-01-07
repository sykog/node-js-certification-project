const express = require("express");
const createError = require('http-errors');
const bodyParser = require("body-parser");
const axios = require("axios").default;
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const portNum = 6500;

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true
}).then(() => console.log('Database connected sucessfully '),
  error => console.log('Could not connected to database : ' + error)
);

const app = express();
const newsRoute = require('./data/routes/news.route');
const weatherRoute = require('./data/routes/weather.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/', express.static(__dirname));
app.use('/api', [newsRoute, weatherRoute]);

app.listen(portNum, () => {
  console.log("listening on port " + portNum);
});

// Find 404 and hand over to error handler
app.use((request, response, next) => {
  next(createError(404));
});

// error handler
app.use( (error, request, response, next) => {
  console.error(error.message);

  if (!error.statusCode) error.statusCode = 500;
  response.status(error.statusCode).send(error.message);
});