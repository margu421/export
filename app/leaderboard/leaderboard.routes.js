(function (angular) {
    'use strict';
    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/leaderboard/:id', {
                    template: '<leaderboard rounds="$resolve.rounds"></leaderboard>',
                    resolve: {
                        rounds: function (fbRef, roundService, $routeParams) {
                            var query = fbRef.getRoundsRef().orderByChild('date');
                            return roundService(query).$loaded();
                        }
                    }
                });
        });
        
})(angular);