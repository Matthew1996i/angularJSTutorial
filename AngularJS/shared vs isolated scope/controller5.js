let app = angular.module("mainApp", []);

app.directive("myFirstScript", function () {
  function linkFunction($scope, elem, attrs) {
    $scope.name = "hello world";
    $scope.changeName = function (newName) {
      $scope.name = newName;
    };
  }

  return {
    restrict: "EA",
    scope: true,
    link: linkFunction,
    template:
      '<span ng-click="changeName(controllerProperty)">Current text: {{name}}<span/>',
  };
});

app.controller("app", function ($scope) {
  $scope.controllerProperty = "this is a controller specific property";
});
