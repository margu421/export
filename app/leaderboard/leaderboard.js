angular.module('app').component('leaderboard', {
    templateUrl: '/leaderboard/leaderboard.html',
    bindings: {
        rounds:"="
        },
    controller: function (auth, $location) {
        
        this.ongoingRound = this.rounds.getOngoingRound();
        
        this.updateRound = function () {
            this.rounds.$save(this.ongoingRound);
            Materialize.toast('Sparat!', 3000, 'rounded');

        }
    }       
})