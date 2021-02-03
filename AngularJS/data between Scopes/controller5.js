let app = angular.module("mainApp5", []);

app.controller("people", ($scope, $http) => {
  $http.get("./database.json").then((response) => {
    $scope.persons = response.data[0].records;
  });
});
