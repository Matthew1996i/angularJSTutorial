let app = angular.module("mainApp", []);

app.directive("myFirstScript", function () {
  return {
    template: "Hello World",
  };
});

app.controller("app", function () {});
