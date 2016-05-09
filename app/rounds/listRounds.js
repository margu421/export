angular.module('app').component('listRounds', {
    templateUrl: '/rounds/listRounds.html',
    bindings: {
        rounds: '=',
        selectRound: "&"
    },
    controller: function (fbRef, roundService, $location) {

        this.rounds = roundService(fbRef.getRoundsRef());
        
        this.ongoingRound = this.rounds.getOngoingRound();
              
        this.showLeaderBoard = function (round) {
            console.log("Leaderboard for: " + round.$id);
            this.selectRound({round: round}); 
            $location.path('/leaderboard/' + round.$id);
        }           
        this.endRound = function ($id) {
            console.log($id);
            var round = fbRef.getRoundsRef().child($id);
            round.update({
                "ongoing": false,
            });
        }
        this.restartRound = function ($id) {
            console.log($id);
            var round = fbRef.getRoundsRef().child($id);
            round.update({
                "ongoing": true,
            });
        }
    }
}
)