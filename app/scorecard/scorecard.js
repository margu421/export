
(function(angular) {
    'use strict';

var module = angular.module('app');

function controller (auth, $location) {
        //SKapa scorekort där score fylls i på pågående runda.
        this.updateRound = function () {
            this.rounds.$save(this.round);
        };
    }



module.component('scorecard', {
    templateUrl: '/scorecard/scorecard.html',
    bindings: {
        rounds: "="
    },
    controllerAs = 'model',
    controller: ['auth', '$location',controller]
});

})(angular);