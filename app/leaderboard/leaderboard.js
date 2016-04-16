angular.module('app').component('leaderboard', {
    templateUrl: '/leaderboard/leaderboard.html',
    bindings: {
        },
    controller: function (auth, $location) {
        
        // this.renderLeaderBoard = function(roundType) {
        //     var holes = [];
        //     if(roundType === "championship") {
        //         for (var i = 1; i<=9; i++) {
        //             holes.push(i);
        //         }
        //     }
        //     else {
        //         for (var i = 1; i<=18; i++) {
        //             holes.push(i);
        //         }
        //     }
        //     return holes;
        // }
    }       
})