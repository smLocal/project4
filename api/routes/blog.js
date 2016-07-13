var express = require('express');
var router = express.Router();
var blog = require('../models/blog');
var db   = require('../db');


router.route('/')
.get(function(req, res){
  Blog.find({})
  .then(function(blogs){
    res.json(blogs);
  });
})

.post(function(req, res){
  var blog = new Blog();
  blog.title = req.body.title;
  blog.priority = req.body.priority;
  blog.difficulty = req.body.difficulty;
  blog.createdAt = new Date();
  blog.updatedAt = new Date();
  blog.save(function(err){
    if(err) return err;
  else res.send(blog);
  });
});

router.route('/:id')
.patch(function(req, res){
  console.log(req.body);
  Blog.findById(req.params.id)
  .then(function(blog){
    blog.title = req.body.title;
    blog.priority = req.body.priority;
    blog.difficulty = req.body.difficulty;
    blog.updatedAt = new Date();
    blog.isComplete = req.body.isComplete;
    if(blog.isComplete)blog.completedOn = new Date();
    return blog.save();
  })

  .then(function(blog){
      res.status(200).send(blog);
  });
})

.delete(function(req, res){
  Blog.findOneAndRemove({'_id': req.params.id})
  .then(function(blog){
    res.status(200).send(blog);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
});


module.exports = router;
