angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        rounds: "="
    },
    controller: function (fbRef, $firebaseArray) {

        console.log(this.roundInPlay);
        this.rounds = $firebaseArray(fbRef.getRoundsRef());

        this.$onInit = this.rounds.$loaded(function (rounds) {
            for (var i = 0; i < rounds.length; i++) {
                if (!rounds[i].endTime) {
                    this.roundInPlay = true;
                    console.log(this.roundInPlay);
                    return;
                }
            }

        }, function (error) {
            console.error(error);
        })


        this.roundInPlay = null;


    }
})