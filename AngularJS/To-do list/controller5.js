let app = angular.module("mainApp", []);

app.controller("app", ($scope) => {
  $scope.tasks = [];

  let taskData = localStorage["tasksList"];

  if (taskData !== undefined) {
    $scope.tasks = JSON.parse(taskData);
  }

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
    $scope.task = null;
    localStorage["tasksList"] = JSON.stringify($scope.tasks);
    console.log(localStorage["tasksList"]);
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
