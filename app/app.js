var app = angular.module('app', ['ngRoute','firebase']);

app.config(function($routeProvider) {
   $routeProvider
    .when('/', {
        template: '<home></home>'
    })
    .when('/login', {
        template: '<login current-auth="$resolve.currentAuth"></login>',
        //varje key i resolveobjectet, om den är ett promise, väntar Angular med att navigera till routen tills att promiset har resolvats
        resolve: {
            currentAuth: function (auth) {
                return auth.$waitForAuth(); //promise som gör att vi väntar på Firebase för authenticering
            }
        }
    })
    .when('/play', {
        template: '<play current-auth="$resolve.currentAuth"></play>',
        resolve: {
            currentAuth: function (auth) {
                return auth.$requireAuth(); }
        }
    })
    .when('/members', {
        template: '<members></members>'
    })
    .when('/member', {
        template: '<member current-auth="$resolve.currentAuth"></member>',
        resolve: {
            currentAuth: function (auth) {
                return auth.$requireAuth(); }
        }
    })
    .when('/admin', {
        template: '<admin current-auth="$resolve.currentAuth"></admin>',
        resolve: {
            currentAuth: function (auth) {
                return auth.$requireAuth(); }
        }
    })
    .when('/leaderboard', {
        template: '<leaderboard></leaderboard>',
    })
    .otherwise('/') 
})

  .run(['$rootScope', 'auth', function($rootScope, auth) {
    // track status of authentication
    auth.$onAuth(function(user) {
      $rootScope.loggedIn = !!user;
    });
  }]);