angular.module('app').component('listRounds', {
    templateUrl: '/rounds/listRounds.html',
    bindings: {
        rounds: '=',
        selectRound: "&"
    },
    controller: function (fbRef, roundService) {

        this.rounds = roundService(fbRef.getRoundsRef());
        
        this.ongoingRound = this.rounds.getOngoingRound();
        
        this.showLeaderBoard = function (round) {
            console.log("leaderboard for: " + round.$id);
            this.selectRound({round: round}); 
        }
               
        this.endRound = function ($id) {
            console.log($id);
            var endTime = new Date();
            var round = fbRef.getRoundsRef().child($id);
            round.update({
                "ongoing": false,
                "endTime": endTime.toJSON()
            });
        }
        this.restartRound = function ($id) {
            console.log($id);
            var round = fbRef.getRoundsRef().child($id);
            round.update({
                "ongoing": true,
                "endTime": null
            });
        }
    }
}
)