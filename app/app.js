var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<home rounds="$resolve.rounds"></home>',
            resolve: {
                rounds: function (fbRef, roundService) {
                    var query = fbRef.getRoundsRef().orderByChild('ongoing');
                    return roundService(query).$loaded();
                }
            }
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
        .when('/members', {
            template: '<members members="$resolve.members"></members>',
            resolve: {
                members: function (fbRef, $firebaseArray) {
                    return $firebaseArray(fbRef.getMembersRef()).$loaded();
                }
            }
        })
        .when('/member', {
            template: '<member current-auth="$resolve.currentAuth"></member>',
            resolve: {
                currentAuth: function (auth) {
                    return auth.$requireAuth();
                }
            }
        })
        .when('/promille', {
            template: '<promille ></promille>',
        })
        .when('/rules', {
            template: '<rules></rules>'
        })

        .otherwise('/')
})

    .run(['$rootScope', 'auth', function ($rootScope, auth) {
        // track status of authentication
        auth.$onAuth(function (user) {
            $rootScope.loggedIn = !!user;
        });


    }]);