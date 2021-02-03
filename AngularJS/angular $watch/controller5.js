let app = angular.module("mainApp", []);

app.controller("app", ($scope) => {
  $scope.counter = -1;
  $scope.$watch("myText", () => {
    $scope.counter++;
  });
});
