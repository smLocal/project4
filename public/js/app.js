angular
.module("myApp", ["ui.router"])
.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      // method: 'GET',
      url: "/login",
      templateUrl: "partials/login.html",
    });

}
