var app = angular.module("orderZipDemo", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html'
    })
    .when('/info', {
      templateUrl: 'partials/info.html'
    })
    .when('/userstories', {
      templateUrl: 'partials/userstories.html',
      controller: 'storiesController'
    })
    .when('/wireframes', {
      templateUrl: 'partials/wireframes.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('storiesController', function($scope, $http){
  $scope.view = {};
  $scope.view.storyIds = [];
  $scope.view.tasks = [];
  $http({
    method: "GET",
    url: "https://www.pivotaltracker.com/services/v5/projects/1786315/stories",
    headers: {'X-TrackerToken': 'a7906909bb1350ebcd24558a1edbab3e'}
  })
  .then(function(data){
    $scope.view.stories = data.data;
    for (var i = 0; i < $scope.view.stories.length; i++) {
      $scope.view.storyIds.push($scope.view.stories[i].id);
    }
    for (var i = 0; i < $scope.view.storyIds.length; i++) {
      console.log("Hello");
      $http({
        method: "GET",
        url: "https://www.pivotaltracker.com/services/v5/projects/1786315/stories/" + $scope.view.storyIds[i] + "/tasks",
        headers: {'X-TrackerToken': 'a7906909bb1350ebcd24558a1edbab3e'}
      })
      .then(function(data){
        $scope.view.tasks.push[i] = data.data;
      });
    }
  });
  console.log($scope.view);
});

app.directive('landing', function() {
  return {
    restrict: 'E',
    templateUrl: 'public/partials/landing.html'
  }
})
