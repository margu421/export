(function () {
    'use strict';

    var module = angular.module('app');

    function controller(auth, $location, $routeParams) {
        
        var model = this;

        model.round = model.rounds.getRoundById($routeParams.id);
        
        model.overUnder = function (player) {
            var overUnder = 0;
            for (var i = 0; i < player.score.holes.length; i++) {
                if (player.score.holes[i].strokes > 0) {
                    overUnder = overUnder + player.score.holes[i].strokes - player.score.holes[i].par;
                }
            }
            if (overUnder > 0) {
                overUnder = "+" + overUnder;
            }
            return overUnder;
        };

        model.totalScore = function (player, fromHole, toHole) {
            var totalScore = 0;
            for (var i = fromHole - 1; i < toHole; i++) {
                if (player.score.holes[i].strokes > 0) {
                    totalScore = totalScore + player.score.holes[i].strokes;
                }
            }
            return totalScore;
        };
        
        model.round.players.sort(function (a, b) {
                if (a.startNumber > b.startNumber) {
                    return 1;
                }
                if (a.startNumber < b.startNumber) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

        model.totalPar = function () {
            var totalPar = 0;
            for (var i = 0; i < model.round.course.scoreCard.holes.length; i++) {
                totalPar = totalPar + model.round.course.scoreCard.holes[i].par;
            }
            return totalPar;
        };

        model.totalLength = function () {
            var totalLength = 0;
            for (var i = 0; i < model.round.course.scoreCard.holes.length; i++) {
                totalLength = totalLength + model.round.course.scoreCard.holes[i].length;
            }
            return totalLength;
        };
    }

    module.component('leaderboard', {
        templateUrl: '/leaderboard/leaderboard.html',
        bindings: {
            rounds: "="
        },
        controllerAs: 'model',
        controller: ['auth', '$location', '$routeParams', controller]
    });

})(angular);