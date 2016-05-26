angular.module("myApp")
  .controller("UsersController", UsersController)
  .controller("BlogController", BlogController);

//UsersController.inject$http

function UsersController() {
  var self = this
  self.blog = {}

self.addBlog = function() {

      Blog.save(self.blog, function(blog) {
        self.blogs.push(blog);
        self.blog = {}
      });

  };


function newBlog() {

  }
}



//function login($http)
