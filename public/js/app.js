angular
.module("myApp", ["ui.router"])
.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
    })
    .state('email', {
      url: "/email",
      templateUrl: "partials/email.html",
    })
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
    });
}
