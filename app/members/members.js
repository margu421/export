angular.module('app').component('members', {
    templateUrl: '/members/members.html',
    bindings: {
        members: '='
    },
    controller: function () {
        
        this.winStars = function (member) {
                var n = member.wins;
                var winStars = [];
                for (var i = 1; i <= n; i++) {
                    winStars.push(i);
                }
                return winStars;
            }
    }
})