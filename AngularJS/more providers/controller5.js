let application = angular.module("mainApp", []);

application.provider("date", function () {
  let greet;

  return {
    setGreeting: function (value) {
      greet = value;
    },
    $get: function () {
      return {
        showDate: function () {
          let date = new Date();
          return greet + " It's " + date.getHours();
        },
        devshowDate: function () {
          let date = new Date();
          return greet + " It's " + date.getHours();
        },
      };
    },
  };
});

application.config(function (dateProvider) {
  let time = dateProvider.$get().devshowDate();
  console.log(time);

  if (time > 0 && time < 12) {
    dateProvider.setGreeting("Good Morning");
  } else if (time > 13 && time < 17) {
    dateProvider.setGreeting("Good Day");
  } else if (time > 17 && time < 19) {
    dateProvider.setGreeting("Good Evening");
  } else {
    dateProvider.setGreeting("Good Night");
  }
});

application.controller("app", function ($scope, date) {
  $scope.greatMessage = date.showDate();
});
