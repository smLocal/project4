angular
  .module("myApp")
  .controller("EmailController", EmailController);

EmailController.$inject = ['$http'];

function EmailController($http) {
  var self = this;
  self.send = send;
  self.message = {};

  function send(){
    console.log('sending email', self.message);
    $http
      .post('/api/email', self.message)
      .then(function(){
        self.message = {}
        window.alert("Email Sent!");
      });
  }
}
