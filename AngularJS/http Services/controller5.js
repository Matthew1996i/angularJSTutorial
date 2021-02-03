let app = angular.module("mainApp5", []);

app.controller("people", ($scope, $http) => {
  $http
    .get("https://crudcrud.com/api/2eced5a5f520490aaab9781e1333e03a/unicorns")
    .then((response) => {
      console.log(response);
      $scope.persons = response.data;
    });
});
