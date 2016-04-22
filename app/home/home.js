angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        rounds: "="
    },
    controller: function (fbRef, $firebaseArray) {
        
        this.rounds = $firebaseArray(fbRef.getRoundsRef());

        this.$onInit = this.rounds.$loaded(function (rounds) {
            for (var i = 0; i < rounds.length; i++) {
                if (!rounds[i].endTime) {
                    this.roundInPlay = true;
                    console.log(this.roundInPlay);
                    return;
                }
                else {
                    this.roundInPlay = false;

                }
            }

        }, function (error) {
            console.error(error);
        })




    }
})