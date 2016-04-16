angular.module('reader', [
  'reader.myreader',
  'ngRoute',
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/reader', {
      templateUrl: 'app/reader/reader.html',
      controller: 'ReaderController'
    })
    .otherwise({
      redirectTo: '/reader'
      });
})