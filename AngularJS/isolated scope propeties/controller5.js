let app = angular.module("mainApp", []);

app.directive("myFirstScript", function () {
  return {
    restrict: "EA",
    scope: {
      name: "@",
      age: "=",
      func: "&",
    },
    template: [
      "<p>Value of name in directive: {{name}}</p>",
      "<p>Enter new 'name' <input type='text' ng-model='name'></p>",
      "<p>Value of age in directive: {{ age }}</p>",
      "<p>Enter new 'age' <input type='number' ng-model='age'></p>",
      "<p>Alert from directives<input type='button' value='From directives' ng-click='func()'></p>",
    ].join(""),
  };
});

app.controller("app", function ($scope) {
  $scope.name = "Matheus";
  $scope.age = 100;
  $scope.alertTheName = function () {
    alert($scope.name);
  };
});
