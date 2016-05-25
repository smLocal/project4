var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "philsinglewhitefemale@gmail.com",
        pass: "philco123"
    }
});


router.get('/email',function(req,res){
  res.render('email');
});

router.post('/',function(req, res){
  var mailOptions = {
    to : req.body.to,
    subject : req.body.subject,
    text : req.body.text
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
    res.end("try again, maybe npm install. noob");
  } else {
    console.log("Message sent: " + response.message);
    res.end("sent");
  }
  });
});

module.exports = router;
