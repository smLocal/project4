angular
  .module("myApp", ["ui.router"])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')

  $stateProvider
    .state('register', {
      url: "/register",
      templateUrl: "partials/register.html",
      controller: "UsersController as ctrl"
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "partials/blog.html",
      controller: "BlogController as ctrl"
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
    })
    .state('email', {
      url: "/email",
      controller: "EmailController as email",
      templateUrl: "partials/email.html",
    })
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html",
      controller: "UsersController as ctrl"
    });
}
