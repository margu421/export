(function (angular) {
    'use strict';
    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
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
                .when('/listRounds', {
                    template: '<list-rounds rounds="$resolve.rounds"></list-rounds>',
                    resolve: {
                        rounds: function (fbRef, roundService) {
                            var query = fbRef.getRoundsRef().orderByChild('date');
                            return roundService(fbRef.getRoundsRef(query)).$loaded();
                        }
                    }
                })
        });
})(angular);