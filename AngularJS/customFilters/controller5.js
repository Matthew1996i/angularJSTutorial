let application = angular.module("mainApp", []);

application.filter("base", function () {
  let something = function (input, base) {
    let parsed = parseInt(input, 10);
    let based = parseInt(base, 10);

    if (isNaN(parsed) || isNaN(based) || based <= 1 || based >= 37)
      return "Error!! Invalid Base";

    return parsed.toString(based);
  };

  return something;
});

application.controller("app", function ($scope) {});
