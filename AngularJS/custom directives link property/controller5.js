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
    link: linkFunction,
    template:
      "<span ng-click=\"changeName('hey there')\">Current text: {{name}}<span/>",
  };
});

app.controller("app", function () {});
