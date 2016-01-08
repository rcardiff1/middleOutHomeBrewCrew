var path = require('path');
var registerUser = require('./../../server/registerUser.js');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + './../index.html'));
  });

  app.get('/home', function(req, res) {
      res.sendFile(path.join(__dirname + './../home.html'));
  });

  app.get('/login', function(req, res) {
      res.sendFile(path.join(__dirname + './../login.html'));
  });

  app.get('/signup', function(req, res) {
      res.sendFile(path.join(__dirname + './../signup.html'));
  });

  // app.get('/profile', isLoggedIn, function(req, res) {
  // })

  //route for facebook authentication and login
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect : '/' }), function(req,res) {
  
    var userName = req.session.passport.user.displayName;
    var valId = req.session.passport.user.id;
    valId = Number(valId);

    savetoDb(userName, valId);
    //if exists / go to home/
    // else redirect to sign up/
    // or save in database

    res.redirect('/home');
    });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
      return next();
  }

  function savetoDb(name, valId) {
    var storeUser = registerUser.create.bind(registerUser);

    var userData = { 'name': name, 'valId' : valId };

    storeUser(userData);
  }

  // res.redirect('/');

};
