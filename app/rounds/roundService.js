angular.module('app').factory('roundService', function ($firebaseArray) {
    var RoundService = $firebaseArray.$extend({
        //här kan man lägga extendad funktionalitet till CourseService, typ
        //om man vill summera totala scoren på en viss bana

        getOngoingRound: function () {
            var round = null;
            angular.forEach(this.$list, function (elem) {
                if (elem.ongoing) {
                    round = elem;
                }
            });
            return round;
        }
        ,getRoundById: function (id) {
            return this.$list.$getRecord(id);    
        }

    });
    return function (ref) {
        return new RoundService(ref);
    }
});

