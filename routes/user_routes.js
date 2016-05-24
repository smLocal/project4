var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.js')



passport.use('local', new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      console.log('user exists')
      if (!user.validatePassword(password)) { return done(null, false); }
      console.log('no errors!')
      return done(null, user);
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});



//Routes
router.get('/', function(req, res) {
  if (req.user) {
    res.render('index', { user: req.user });
  } else {
    res.render('splash');
  }
});

//passport Login
router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Success');
    res.redirect('/');
  });



//passport register

router.post('/register', function(req, res) {


  var body = req.body;

  var user = new User();

  user.username = body.username;
  user.password = user.encrypt(body.password);

  user.save(function(err) {
    if (err) throw err;
    // res.json({ message: 'User created successfully!', results: user });
    req.login(user, function(err) {
        if (err) {
          console.log(err);
        }
        res.redirect('/');
      });
  });
});


router.get('/register', function(req, res) {
  res.render('register');
});


router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });


module.exports = router;