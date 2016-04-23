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
        .when('/round', {
            template: '<round courses="$resolve.courses" members="$resolve.members"></round>',
            resolve: {
                courses: function (fbRef, $firebaseArray, auth) {
                    return auth.$requireAuth().then(function () {
                        var query = fbRef.getCoursesRef().orderByChild('name');
                        return $firebaseArray(fbRef.getCoursesRef(query)).$loaded();
                    })
                },
                members: function (fbRef, $firebaseArray) {
                    return $firebaseArray(fbRef.getMembersRef()).$loaded();
                },
                currentAuth: function (auth) {
                    return auth.$requireAuth();
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
        .when('/listRounds', {
            template: '<list-rounds rounds="$resolve.rounds" current-auth="$resolve.currentAuth"></list-rounds>',
            resolve: {
                rounds: function (fbRef, roundService) {
                    var query = fbRef.getRoundsRef().orderByChild('date');
                        return roundService(fbRef.getRoundsRef(query)).$loaded();
                },
                currentAuth: function (auth) {
                    return auth.$requireAuth();
                }
            }
        })

        .when('/admin', {
            template: '<admin current-auth="$resolve.currentAuth"></admin>',
            resolve: {
                currentAuth: function (auth) {
                    return auth.$requireAuth();
                }            
            }
        })
        .when('/rules', {
            template: '<rules></rules>'
        })
        .when('/admin/courses', {
            template: '<courses current-auth="$resolve.currentAuth" courses="$resolve.courses"></courses>',
            resolve: {
                currentAuth: function (auth) {
                    return auth.$requireAuth();
                },
                courses: function (fbRef, courseService) {
                    var query = fbRef.getCoursesRef().orderByChild('clubName');
                    return courseService(query).$loaded();
                }
            }  
        })
        .when('/leaderboard', {
            template: '<leaderboard rounds="$resolve.rounds"></leaderboard>',
            resolve: {
                rounds: function (fbRef, roundService) {
                    var query = fbRef.getRoundsRef().orderByChild('start');
                    return roundService(query).$loaded();
                }
            }
        })
        .otherwise('/')
})

    .run(['$rootScope', 'auth', function ($rootScope, auth) {
        // track status of authentication
        auth.$onAuth(function (user) {
            $rootScope.loggedIn = !!user;
        });


    }]);