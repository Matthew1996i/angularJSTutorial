let app = angular.module("mainApp", []);

app.directive("myFirstScript", function () {
  return {
    template: "Hello World",
    restrict: "E",
    scope: "",
    link: "",
  };
});

app.controller("app", function () {});
