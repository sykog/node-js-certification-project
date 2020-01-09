const express = require("express");
const createError = require('http-errors');
const bodyParser = require("body-parser");
const axios = require("axios").default;
const http = require('http');
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const portNum = 6500;

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Database connected sucessfully '),
  error => console.log('Could not connected to database : ' + error)
);

const app = express();
const newsRoute = require('./data/routes/news.route');
const weatherRoute = require('./data/routes/weather.route');
const adminRoute = require('./data/routes/AdminLoginReg.route');
const newsAdmin = require('./data/routes/newsAdmin');
const sportsRoute = require('./data/routes/sports.route');

//app.use(session({secret: 'edurekaSecert'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/', express.static(__dirname));
app.use('/api', [newsRoute, weatherRoute, adminRoute, newsAdmin, sportsRoute]);

const server = http.createServer(app).listen(portNum, () => {
  console.log("listening on port " + portNum);
});

const io = require('socket.io')(server);

// Handle socket traffic
io.sockets.on('connection', (socket) => {
  const users = [];
  const socketIds = Object.keys(io.sockets.sockets);

  console.log("New user connected");
  socket.username = "Anonymous";

  socket.on('submitUsername', username => {
    socket.username = username;
    users.push({username: username});
    io.sockets.emit('userList', {users: users, sockets: socketIds});
  });

  socket.on('newMessage', messageData => {
    io.sockets.emit('newMessage', {username: socket.username, message: messageData});
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', {username: socket.username});
  });
});

