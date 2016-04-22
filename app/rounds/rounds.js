angular.module('app').component('rounds', {
    templateUrl: '/rounds/rounds.html',
    bindings: {
        rounds: '='
    },
    controller: function (fbRef, $firebaseArray) {

        this.rounds = $firebaseArray(fbRef.getRoundsRef());
               
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