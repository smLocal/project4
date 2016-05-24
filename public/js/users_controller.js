angular.module("myApp")
  .controller("UsersController", UsersController);

//UsersController.inject$http

function UsersController() {
  var self = this
  self.message = "hello there"

}


//function login($http)
