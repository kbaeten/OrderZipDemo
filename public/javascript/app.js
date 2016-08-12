var app = angular.module("orderZipDemo", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'landingController'
    })
    .when('/info', {
      templateUrl: 'partials/info.html',
      controller: 'infoController'
    })
    .when('/mockup', {
      templateUrl: 'partials/mockup.html',
      controller: 'mockUpController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('landingController', function($scope){
  $scope.view = {};
  $scope.view.message = "Welcome!"
});

app.controller('infoController', function($scope){
  $scope.view = {};
  $scope.view.message = "Welcome!"
});
app.controller('mockUpController', function($scope){
  $scope.view = {};
  $scope.view.message = "Welcome!"
});
