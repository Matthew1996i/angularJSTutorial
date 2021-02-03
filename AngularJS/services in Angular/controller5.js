let application = angular.module("mainApp", []);

application.service("random", function () {
  let num = Math.floor(Math.random() * 10);

  this.generate = function () {
    return num;
  };
});

application.controller("app", ($scope, random) => {
  $scope.generateRandom = () => {
    $scope.randomNumber = random.generate();
  };
});
