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
  $scope.view.storySet = {};
  $http({
    method: "GET",
    url: "https://www.pivotaltracker.com/services/v5/projects/1786315/stories",
    headers: {'X-TrackerToken': 'a7906909bb1350ebcd24558a1edbab3e'}
  })
  .then(function(data){
    $scope.view.stories = data.data;
    for (var i = 0; i < $scope.view.stories.length; i++) {
      let currentStory = $scope.view.stories[i];
      let storyId = currentStory.id;
      $scope.view.storySet[storyId] = {estimate: currentStory.estimate, name: currentStory.name}
      $http({
        method: "GET",
        url: "https://www.pivotaltracker.com/services/v5/projects/1786315/stories/" + storyId + "/tasks",
        headers: {'X-TrackerToken': 'a7906909bb1350ebcd24558a1edbab3e'}
      })
      .then(function(data){
        $scope.view.storySet[storyId].tasks = data.data;
        console.log($scope.view.storySet);
      })
    }
  });
});

app.directive('landing', function() {
  return {
    restrict: 'E',
    templateUrl: 'public/partials/landing.html'
  }
})
