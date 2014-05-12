'use strict';

angular.module('angularfullstackApp', [
  'btford.socket-io',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .factory('socket', function (socketFactory) {
    return socketFactory();
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/message', {
        templateUrl: 'partials/message',
        controller: 'MessageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  })
  .directive('scrollbottom', function() {
    return function(scope, element) {
      scope.$watch('$last',function(v){
        if (v) { element.parent().parent().scrollTop(element.parent().parent().prop('scrollHeight')); }
      });
    };
  });