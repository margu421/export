angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        rounds: "="
    },
    controller: function (fbRef, $firebaseArray) {
        
        // this.rounds = $firebaseArray(fbRef.getRoundsRef());
                   
        // this.checkRoundsInPlay = function (rounds) {
        //     var numberOfRounds = rounds.length;
        //     var roundsInPlay = 0;
        //     for (var i = 0; i < rounds.length; i++) {
        //         if (rounds[i].ongoing) {
        //             roundsInPlay++;   
        //         }
        //     }
        //     console.log(roundsInPlay + " rundor pågår");                
        //     this.roundsInPlay = roundsInPlay;
        // }
        
        // this.checkRoundsInPlay(this.rounds);
    }
})