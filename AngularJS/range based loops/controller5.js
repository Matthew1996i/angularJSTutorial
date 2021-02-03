let app = angular.module("mainApp", []);

app.controller("app", ($scope) => {
  var range = new Array(100);

  $scope.range = range;
});
