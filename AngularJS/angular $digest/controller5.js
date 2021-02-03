let app = angular.module("mainApp", []);

app.controller("app", ($scope) => {
  document.querySelector("input").addEventListener(
    "click",
    () => {
      $scope.myRandomNumber = (Math.random() * 100).toFixed(0);
      $scope.$digest();
    },
    false
  );
});
