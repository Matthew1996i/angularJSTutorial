let application = angular.module("mainApp", []);

application.service("fromService", function () {
  this.message = "this is from services";
});

application.factory("fromFactory", function () {
  let factory = {};
  factory.message = "This is from Factory";
  return factory;
});

application.provider("fromProvider", function () {
  let msg = "This is from provider";
  return {
    setName: function (name) {
      msg += " " + name;
    },
    $get: function () {
      return {
        message: msg,
      };
    },
  };
});

application.config(function (fromProviderProvider) {
  fromProviderProvider.setName("Matheus");
});

application.controller(
  "app",
  function ($scope, fromService, fromFactory, fromProvider) {
    $scope.greetMessage = [
      fromService.message,
      fromFactory.message,
      fromProvider.message,
    ];
  }
);
