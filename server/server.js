var express = require('express');
var app = express();

var http = require('http').createServer(app);
var socketServer = http;
var io = require('socket.io')(socketServer);
var path = require('path');
var people = {};
var YouTube = require('youtube-node');
var youTube = new YouTube();

// if(!process.env.DEPLOYED) {
//   var config = require('./env/config.js');
// }

var mongoose = require('mongoose');
var passport = require('passport');
var cookieParser = require('cookie-parser');

var registerUser = require('./registerUser.js');
var bodyParser = require('body-parser');
var session = require('express-session');

mongoose.connect('mongodb://nodetojoy:nodetojoy@ds037165.mongolab.com:37165/nodetojoy');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./../config/passport.js')();

app.use(session({ secret: 'wildcards',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: false
  }
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/searchYoutube', function(req, res) {
  youTube.setKey(process.env.YOUTUBE_API_KEY || config.YOUTUBE_API_KEY);

  youTube.search(req.query.searchItem, 10, function(error, result) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(result);
      res.send(result);
    }
  });
});


require('../client/app/routes.js')(app, passport);

// var socketServer = require('http').createServer(app);
// var io = require('socket.io')(socketServer);
// var people = {};

socketServer.listen((process.env.PORT || 4000), function() {
  var host = socketServer.address().address;
  var port = socketServer.address().port;

  console.log('App launched and hosting at http://%s:%s',host,port);
});

// create socket.io connection
io.on('connection', function(socket) {
  //start video socket
  io.emit('new connection');

  socket.on('new connection res', function(obj){
    io.emit('new connection res', obj);
  });
  
  // register new user connect
  socket.on('join', function(name) {
    people[socket.id] = name;
    socket.emit('update','You have connected to the server');
    io.emit('update', name + ' has joined the server.');
    io.emit('update-people', people);
    console.log(people[socket.id] + ' has connected!');
  });
  
  // log user message to chat
  socket.on('chat message', function(msg) {
    io.emit('chat message', people[socket.id], msg);
    console.log(people[socket.id] + ': ' + msg);
  });

  // log user disconnect to chat and update user list
  socket.on('disconnect', function() {
    var temp = people[socket.id];
    io.emit('update', temp + ' has left the server.');
    delete people[socket.id];
    io.emit('update-people', people);
    console.log(temp + ' has disconnected!');
  });
  
  socket.on('url submit', function(idVal){
    io.emit('url submit', idVal);
    // console.log(people[socket.id] + ' has submitted a URL: ', url);
  });
  socket.on('play video', function(){
    io.emit('play video');
  });
  socket.on('pause video', function(){
    io.emit('pause video');
  });
});



