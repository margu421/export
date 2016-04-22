angular.module('app').component('play', {
    templateUrl: '/play/play.html',
    bindings: {
        courses: '=',
        members: '='
    },
    controller: function (auth, fbRef, $firebaseArray, $firebaseObject, $location) {

        this.players = [];
        this.roundStartTime = new Date();
        this.roundTypes = ["Tävling", "Träning"];
        this.roundFinishTime = undefined;
        this.startingFieldCreated = false;
        this.startNumbersAssigned = false;

        this.rounds = $firebaseArray(fbRef.getRoundsRef());

        this.setDefaults = function () {
            this.type = this.roundTypes[1];
        }
        this.setDefaults();

        this.assignStartNumbers = function () {
            for (var i = 0; i < this.players.length; i++) {
                this.players[i].startNumber = Math.round(Math.random() * 100);
            }

            this.players.sort(function (a, b) {
                if (a.startNumber > b.startNumber) {
                    return 1;
                }
                if (a.startNumber < b.startNumber) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            // for (var i = 1; i <= this.players.length; i++) {   
            //         for(var j=0 )   
            //         this.players[i].flight = 1;
            //     }
            // }
            

            this.startNumbersAssigned = true;
        }

        this.createStartingField = function () {
            this.players = [];
            for (var i = 0; i < this.members.length; i++) {
                if (this.members[i].playsThisRound) {
                    this.players.push({ name: this.members[i].name, id: this.members[i].$id });
                }

            }
            this.startingFieldCreated = true;
        }


        this.saveRound = function () {

            this.rounds.$add({
                startTime: this.roundStartTime.toJSON(),
                type: this.type,
                course: this.course,
                players: this.players,
                createdBy: auth.$getAuth().uid,
                ongoing: true,
                endTime: null
            });
            $location.path('/scorecard');


        }

        this.cancel = function () {
            $location.path('/home');
        }

    }
})