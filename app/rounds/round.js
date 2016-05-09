angular.module('app').component('round', {
    templateUrl: '/rounds/round.html',
    bindings: {
        courses: '=',
        members: '='
    },
    controller: function (roundService, fbRef, $location) {

        this.players = [];
        this.date = new Date().valueOf();
        this.roundTypes = ["Tävling", "Träning"];
        this.roundFinishTime = undefined;
        this.startingFieldCreated = false;
        this.startNumbersAssigned = false;


        this.rounds = roundService(fbRef.getRoundsRef());

        this.setDefaults = function () {
            this.type = this.roundTypes[1];
            this.startNumbersAssigned = false;
        }
        this.setDefaults();

        this.assignStartNumbers = function () {
            var numberOfPlayers = this.players.length;

            for (var i = 0; i < numberOfPlayers; i++) {
                this.players[i].startNumber = Math.random() * 100;
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

            //Spelare delade in i bollar
            if (numberOfPlayers <= 4) {
                console.log("if1: " + numberOfPlayers);   
                for (var j = 0; j < numberOfPlayers; j++)
                    this.players[j].flight = 1;
            }
            else if (numberOfPlayers === 5 || numberOfPlayers === 6) {
                console.log("if2: " + numberOfPlayers);
                for (var j = 0; j < numberOfPlayers; j++) {
                    if (j < 3) {
                        this.players[j].flight = 1;
                    }
                    else {
                        this.players[j].flight = 2;
                    }
                }
            }
            else if (numberOfPlayers > 6) {
                console.log("if3: " + numberOfPlayers);
                for (var j = 0; j < numberOfPlayers; j++) {
                    if (j < 4) {
                        this.players[j].flight = 1;
                    }
                    else {
                        this.players[j].flight = 2;

                    }
                }
            }
            this.startNumbersAssigned = true;

        }

        this.toggleInOutOfStartingField = function (player) {
            if (player.plays === true) {
                return;
            }
            else {
                player.plays = true;
                this.players.push({ name: player.name, nickname: player.nickname, id: player.$id, score: this.course.scoreCard });
            }
        }

        this.clearStartingField = function () {
            this.players = [];
            for (var i = 0; i < this.members.length; i++) {
                this.members[i].plays = false;
            };

        }

        this.saveRound = function () {
            this.rounds.$add({
                date: this.date,
                type: this.type,
                course: this.course,
                players: this.players,
                ongoing: true,
            });
            $location.path('/listRounds');
        }

        this.cancel = function () {
            $location.path('/home');
        }

    }
})