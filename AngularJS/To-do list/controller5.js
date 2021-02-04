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
      $scope.addTask({ taskMessage: $scope.task, status: false });
    }
  };

  $scope.addTask = function (task) {
    $scope.tasks.push(task);
    $scope.task = null;
    localStorage["tasksList"] = JSON.stringify($scope.tasks);
  };

  $scope.contentEdit = function (msg) {
    for (i = 0; i < $scope.tasks.lenght; i++) {
      if ($scope.tasks[i].taskMessage == msg) {
        $scope.tasks[i].taskMessage = event.target.innerText;
      }
    }

    event.target.contentEditable =
      event.target.contentEditable === "false" ? "true" : "false";
  };

  $scope.enterAgain = function () {
    if (event.which === 13) {
      $scope.contentEdit();
    }
  };
});
