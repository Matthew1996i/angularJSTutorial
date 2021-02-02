let app = angular.module("mainApp2", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<b>This is template</b>",
      templateUrl: "page.html",
    })
    .when("/helloUser", {
      templateUrl: "hello.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
