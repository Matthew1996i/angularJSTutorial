let app = angular.module("mainApp3", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "login.html",
    })
    .when("/dashboard", {
      templateUrl: "dashboard.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});

app.controller("loginCtrl", function ($scope, $location) {
  $scope.submit = function () {
    let uname = $scope.username;
    let password = $scope.password;

    if ($scope.username === "admin" && $scope.password === "admin") {
      $location.path("/dashboard");
    } else {
      alert("Login Wrong");
    }
  };
});
