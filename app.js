var express= require('express');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var db = require('./api/db.js');
var passport = require('passport');
var session = require('express-session');
var flash    = require('connect-flash');
var router = require('./api/routes/user_routes');
var nodemailer = require('./api/routes/email');
var path = require('path');

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

//Configure view engine to render EJS templates
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

//root
app.use('/', function(req, res) {
  res.render('/');
});

//nodemailer
app.use('/email', nodemailer);

app.listen(port, function(){
  console.log("Listening on port " + port);
});
