var app = angular.module("orderZipDemo", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'mainController'
    })
    .when('/info', {
      templateUrl: 'partials/info.html',
      controller: 'mainController'
    })
    .when('/userstories', {
      templateUrl: 'partials/userstories.html',
      controller: 'mainController'
    })
    .when('/wireframes', {
      templateUrl: 'partials/wireframes.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('mainController', function($scope, $http){
  $scope.view = {};
  $scope.stories = function() {
    $http({
      method: "GET",
      url: "http://www.pivotaltracker.com/services/v5/projects/1786315/stories",
      headers: {'X-TrackerToken': 'a7906909bb1350ebcd24558a1edbab3e'}
    })
    .then(function(data){
      console.log(data.data);
      $scope.view.results = data.data.stories;
      console.log($scope.view.results);
    });
  };
});

app.directive('landing', function() {
  return {
    restrict: 'E',
    templateUrl: 'public/partials/landing.html'
  }
})
