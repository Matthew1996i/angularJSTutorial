let app = angular.module("mainApp", []);

app.controller("app", ($scope) => {
  $scope.tasks = [];

  $scope.searchEnter = function () {
    if (
      event.which === 13 &&
      $scope.task !== undefined &&
      $scope.task !== null
    ) {
      $scope.addTask();
    }
  };

  $scope.addTask = function () {
    $scope.tasks.push({ task: $scope.task, status: false });
    console.log($scope.tasks);
    $scope.task = null;
  };

  $scope.contentEdit = function () {
    if (event.which === 13) {
      event.target.contentEditable = "false";
    } else {
      event.target.contentEditable = !event.target.contentEditable
        ? "false"
        : "true";
    }
  };
});
