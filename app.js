var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var path = require('path');
var session = require('express-session');
var flash    = require('connect-flash');
var db = require('./api/db.js');
var router = require('./api/routes/user_routes');
var nodemailer = require('./api/routes/email');
var port = process.env.PORT || 3000;
var app = express();

//Middleware
app.use(express.static(path.join(__dirname + '/public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

//root
app.use('/', router);

app.get('/blog', function(req, res) {
  res.render('blog');
});

//nodemailer
app.use('/api/email', nodemailer);

app.listen(port, function(){
  console.log("Listening on port " + port);
});
