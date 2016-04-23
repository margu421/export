angular.module('app').component('leaderboard', {
    templateUrl: '/leaderboard/leaderboard.html',
    bindings: {
        rounds:"="
        },
    controller: function (auth, $location) {
        
        this.ongoingRound = this.rounds.getOngoingRound();
    }       
})