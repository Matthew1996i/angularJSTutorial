let app = angular.module("mainApp", ["ngAnimate"]);

app.controller("app", function ($scope) {
  $scope.foods = ["pizza", "burguer", "extra cheesy pizza", "potato chips"];
});
