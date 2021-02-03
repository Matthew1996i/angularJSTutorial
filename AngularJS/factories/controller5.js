let application = angular.module("mainApp", []);

application.factory("random", function () {
  let randomObject = {};

  let num = Math.floor(Math.random() * 10);

  randomObject.generate = function () {
    return num;
  };

  return randomObject;
});

application.controller("app", ($scope, random) => {
  $scope.generateRandom = () => {
    $scope.randomNumber = random.generate();
  };
});
