angular.module('myApp')
  .controller('BlogController', BlogController);


BlogController.$inject=['$http'];

function BlogController($http){
  var self = this;
  self.all = [];
  self.getBlog = getBlog;
  self.addblog = addblog;
  self.completeblog = completeblog;
  self.deleteblog = deleteblog;
  self.updateblog = updateblog;
  self.test = function(blog){console.log('I lost my focus!',blog);};
  self.newblog = {};


  function getBlog(){
    $http
        console.log(" testingg")
        .get('http://localhost:3000/api/routes/blog')
        console.log("tested")
        .then(function(response){
          console.log(response);
          self.all = response.data;
        });
  }
  getBlog();
  function addblog(){
    $http
        .post('http://localhost:3000/api/routes/blog', self.newblog)
        .then(function(response){
          console.log(response);
          self.newblog = {};
          getBlog();
        });

  }
  function completeblog(blog){
    blog.isComplete=true;
    $http
        .patch('http://localhost:3000/api/routes/blog/'+blog._id,blog)
        .then(function(response){
          console.log(response);
          getBlog();
        });
  }
  function updateblog(blog){
    console.log(blog);
    $http
        .patch('http://localhost:3000/api/routes/blog/'+blog._id,blog)
        .then(function(response){
          console.log(response);
          getBlog();
        });
  }

  function deleteblog(blog){
    $http
        .delete('http://localhost:3000/api/routes/blog/'+blog._id)
        .then(function(response){
          getBlog();
        });
  }

}
