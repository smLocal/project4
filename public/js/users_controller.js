angular.module("myApp")
  .controller("UsersController", UsersController);

function UsersController() {
  var self = this
  self.message = "hello there"
}
